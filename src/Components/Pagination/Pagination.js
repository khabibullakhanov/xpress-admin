import { React } from "react";
import "./Pagination.css"
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Button } from "@mui/material";

export const Pagination = ({
    postsPerPage,
    totalPosts,
    paginate,
    currentPage,
    setCurrentPage,
}) => {
    const pageNumbers = [];
    const maxPageNumber = Math.ceil(totalPosts / postsPerPage);

    for (let i = 1; i <= maxPageNumber; i++) {
        pageNumbers.push(i);
    }

    let left = currentPage - 1;
    let right = currentPage + 1;

    return (
        <>
            {maxPageNumber ? (
                <div className="numbersCard">
                    <div>
                        <Button
                            onClick={() =>
                                setCurrentPage(currentPage !== 1 ? left : currentPage)
                            }
                        >
                            <ChevronLeftIcon />
                        </Button>
                        {pageNumbers.map((number) => (
                            <button
                                key={number}
                                onClick={() => paginate(number)}
                                className={
                                    currentPage === number ? "pageLink active" : "pageLink"
                                }
                            >
                                {number}
                            </button>
                        ))}
                        <Button
                            onClick={() =>
                                setCurrentPage(currentPage !== maxPageNumber ? right : 1)
                            }
                        >
                            <ChevronRightIcon />
                        </Button>
                    </div>
                </div>
            ) : (
                ""
            )}
        </>
    );
};