import React from 'react';
import './pagination.scss';

const Pagination = ({ totalPosts, postsPerPage, setCurrentPage, currentPage }) => {
    let pages = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pages.push(i);
    }

    const totalPages = pages.length;

    const handleFirstPage = () => setCurrentPage(1);
    const handleLastPage = () => setCurrentPage(totalPages);
    const handlePreviousPage = () => setCurrentPage(prev => Math.max(prev - 1, 1));
    const handleNextPage = () => setCurrentPage(prev => Math.min(prev + 1, totalPages));

    return (
        <div className='pagination'>
            <span>{currentPage}/{totalPages}</span>
            <button onClick={handleFirstPage} disabled={currentPage === 1}>&lt;&lt;</button>
            <button onClick={handlePreviousPage} disabled={currentPage === 1}>&lt;</button>
            {pages.map((page, index) => {
                return (
                    <button key={index} onClick={() => setCurrentPage(page)} className={page === currentPage ? 'active' : ''}>
                        {page}
                    </button>
                );
            })}
            <button onClick={handleNextPage} disabled={currentPage === totalPages}>&gt;</button>
            <button onClick={handleLastPage} disabled={currentPage === totalPages}>&gt;&gt;</button>
        </div>
    );
}

export default Pagination;
