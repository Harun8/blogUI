import React from "react";

const Pagination = () => {
  return (
    <nav aria-label="Page navigation example">
      <ul class="pagination justify-content-between">
        <li class="page-item ms-5">
          <a class="page-link " href="#">
            Previous
          </a>
        </li>

        <div class="d-flex">
          <li class="page-item">
            <a class="page-link" href="#">
              1
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              2
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              3
            </a>
          </li>
        </div>

        <li class="page-item mx-5">
          <a class="page-link" href="#">
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
