import React, { useEffect, useState } from "react";

import useSWR from "swr";
import axios from "axios";

import ListItem from "./ListItem";
import ListControls from "./ListControls";
import ListItemSkeleton from "./ListItemSkeleton";
import ListEmptyState from "./ListEmptyState";

import { useAuth } from "@/lib/auth";
import fetcher from "@/utils/fetcher";
import { getUserTodoItems } from "@/lib/db";

function List(props) {
  const auth = useAuth();
  const {
    data: todItems,
    error,
    mutate,
  } = useSWR(auth.user ? [`/api/getItems`, auth.user.token] : null, fetcher);
  // console.log("23: ", { todItems });

  return (
    <>
      {todItems && todItems.length > 0 && (
        <div className="dark:shadow-list-dark shadow-list-light rounded-[5px]">
          {todItems.map((item) => (
            <ListItem key={item.id} {...item} />
          ))}
          <ListControls count={todItems.length} />
        </div>
      )}
      {!todItems && (
        <>
          <div className="dark:shadow-list-dark shadow-list-light rounded-[5px]">
            <ListItemSkeleton />
            <ListItemSkeleton />
            <ListItemSkeleton />
          </div>
        </>
      )}
      {todItems && todItems.length === 0 && (
        <div className="dark:shadow-list-dark shadow-list-light rounded-[5px]">
          <ListEmptyState />
        </div>
      )}
    </>
  );
}

export default List;
