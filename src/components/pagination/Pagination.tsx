import React from 'react';

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    goToPage: (page: number) => void;
    goToNextPage: () => void;
    goToPreviousPage: () => void;
}

const Pagination: React.FC<PaginationProps> = ({ 
    currentPage, 
    totalPages, 
    goToPage, 
    goToNextPage, 
    goToPreviousPage }) => {

    const visiblePageNumbers = [];
    const maxVisiblePages = 4;
    const startPage = Math.max(currentPage - 1, 1);
    const endPage = Math.min(startPage + maxVisiblePages - 1, totalPages);

    for (let i = startPage; i <= endPage; i++) {
        visiblePageNumbers.push(i);
    }

return (
    <div className='pagination'>
        <button className='btn' onClick={goToPreviousPage} disabled={currentPage === 1}>Prev</button>
        <div className="page-buttons">
            {visiblePageNumbers.map((pageNumber) => (
            <button
                key={pageNumber}
                className={`page-button ${pageNumber === currentPage ? 'active' : ''}`}
                onClick={() => goToPage(pageNumber)}
            >
                {pageNumber}
            </button>
            ))}
        </div>
            <button className='btn' onClick={goToNextPage} disabled={currentPage === totalPages}>Next</button>
        </div>
        );
    };

    export default Pagination;