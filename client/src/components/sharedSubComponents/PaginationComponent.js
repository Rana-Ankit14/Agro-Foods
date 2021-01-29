import { Button } from "@material-ui/core";
import React from "react";
import Pagination from "react-bootstrap/Pagination";

const SubPaginationComponent = ({ currentPage, number, handleClick }) => {
  if (currentPage === number) {
    return (
      <Pagination.Item onClick={() => handleClick(number)} active>
        {number}
      </Pagination.Item>
    );
  } else {
    return (
      <Pagination.Item onClick={() => handleClick(number)}>
        {number}
      </Pagination.Item>
    );
  }
};

export const PaginationComponent = ({
  totalPage,
  perPage,
  currentPage,
  handleClick,
}) => {
  const pageNumbers = [];
  for (let i = 1; i <= totalPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <Pagination>
      {currentPage > 1 ? (
        // <Button onClick={() => handleClick(currentPage - 1)}>Previous</Button>
        <Pagination.Prev onClick={() => handleClick(currentPage - 1)} />
      ) : (
        <></>
      )}
      {pageNumbers.map((number) => {
        return (
          <SubPaginationComponent
            currentPage={currentPage}
            number={number}
            handleClick={handleClick}
          />
        );
      })}
      {currentPage < totalPage ? (
        // <Button onClick={() => handleClick(currentPage + 1)}>Next</Button>
        <Pagination.Next onClick={() => handleClick(currentPage + 1)} />
      ) : (
        <></>
      )}
    </Pagination>
  );
};
