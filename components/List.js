import React, { useEffect, useState } from "react";

import useSWR from "swr";
import axios from "axios";

import ListItem from "./ListItem";
import ListControls from "./ListControls";
import ListItemSkeleton from "./ListItemSkeleton";
import ListEmptyState from "./ListEmptyState";

import { useAuth } from "@/lib/auth";
import { useFilter } from "@/lib/FilterContext";

import fetcher from "@/utils/fetcher";

import { getUserTodoItems } from "@/lib/db";

function List(props) {
  const auth = useAuth();
  const { filter } = useFilter();
  console.log(filter);
  const {
    data: todItems,
    error,
    mutate,
  } = useSWR(auth.user ? [`/api/getItems`, auth.user.token] : null, fetcher);

  return (
    <>
      {todItems && todItems.length > 0 && (
        <div className="dark:shadow-list-dark shadow-list-light rounded-[5px]">
          {todItems.map((item, i) => {
            if (filter === "completed" && item.checked) {
              console.log("36", filter);
              console.log("37", item);
              return <ListItem key={item.id} index={i} {...item} />;
            } else if (filter === "active" && !item.checked) {
              console.log("40", filter);
              console.log("41", item);
              return <ListItem key={item.id} index={i} {...item} />;
            } else if (filter === "all") {
              return <ListItem key={item.id} index={i} {...item} />;
            }
          })}
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
