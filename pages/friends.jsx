import React, { useEffect, useState } from "react";
import styles from "./friends.module.css";
import FriendsList from "@/components/friendsList";
import FriendRow from "@/components/friendsList/friendRow";
import Filter from "@/components/filter";
import FilterToggle from "@/components/filterToggle";

const Friends = () => {
  const [pageLoading, setPageLoading] = useState(false);
  const [friendsList, setFriendsList] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [rowsLoading, setRowsLoading] = useState(false);
  const [filter, setFilter] = useState([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const handleIsFilterOpen = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  const handleIsFilterCleared = () => {
    setFriendsList([]);
    setPageNumber(1);
    setTotalPages(0);
    setFilter([]);
  };

  const handleFilter = data => {
    setFriendsList([]);
    setPageNumber(1);
    setTotalPages(0);
    setFilter(data);
  };

  const handleScroll = () => {
    const isAtBottom =
      document.getElementById("friendsListComponent").scrollHeight -
        document.getElementById("friendsListComponent").scrollTop <=
      document.getElementById("friendsListComponent").clientHeight;

    if (isAtBottom) {
      setRowsLoading(true);
      setPageNumber(pageNumber + 1);
    }
  };

  // todo: modularize apis into own folder
  useEffect(() => {
    if (friendsList.length === 0) setPageLoading(true);
    const fetchFilter = filter.length === 1 ? filter[0] : filter.concat(",");
    // todo: Suspense in component? Or use fetch loading state
    fetch(
      `/api/friends?pageNumber=${pageNumber}&rows=20${
        filter.length > 0 ? `&filter=${fetchFilter}` : ""
      }`
    )
      .then(res => res.json())
      .then(data => {
        setTimeout(() => {
          setTotalPages(data.totalPages);
          setFriendsList(friendsList.concat(data.pageData));
          setPageLoading(false);
          setRowsLoading(false);
        }, 300);
      });
  }, [filter, pageNumber]);

  useEffect(() => {
    document
      .getElementById("friendsListComponent")
      .addEventListener("scroll", handleScroll);
  }, [pageNumber]);

  return (
    <div className={styles.container}>
      <FilterToggle
        currentFilters={filter.length}
        isCleared={filter.length === 0}
        isOpen={isFilterOpen}
        handleIsCleared={handleIsFilterCleared}
        handleIsOpen={handleIsFilterOpen}
      />
      {isFilterOpen && (
        <Filter
          filterData={filter}
          handleIsOpen={handleIsFilterOpen}
          handleFilter={data => handleFilter(data)}
        />
      )}
      {pageLoading ? (
        <FriendsList loading />
      ) : (
        <FriendsList rowsLoading={rowsLoading} list={friendsList} />
      )}

      {rowsLoading && pageNumber !== totalPages && (
        <div>
          <FriendRow loading />
        </div>
      )}
    </div>
  );
};

export default Friends;
