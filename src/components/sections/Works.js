import React, { useState, useEffect } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import Pagetitle from "../elements/Pagetitle";
import Portfolio from "../elements/Portfolio";

const filters = [
  {
    id: 1,
    text: "everything",
  },
  {
    id: 2,
    text: "frontend",
  },
  {
    id: 3,
    text: "backend",
  },
  {
    id: 4,
    text: "fullstack",
  },
];

const allData = [
  {
    id: 1,
    title: "Thaki Teacher Digital Toolkit",
    category: "frontend",
    image: "images/works/Thaki.png",
    link: "https://tdt.thaki.org/",
  },
  {
    id: 2,
    title: "Cube26",
    category: "frontend",
    image: "images/works/cube26.svg",
    link: "https://cube26.axensocenter.com/allcubes",
  },
  {
    id: 3,
    title: "Community - Chat App",
    category: "frontend",
    image: "images/works/3.svg",
    popupLink: ["images/works/1.png", "images/works/2.png"],
  },
  {
    id: 4,
    title: "Book Store - Interface",
    category: "frontend",
    image: "images/works/book.png",
    popupLink: ["images/works/book.png"],
  },
  {
    id: 5,
    title: "Tesla Store",
    category: "fullstack",
    image: "images/works/tesla.png",
    popupLink: ["images/works/tesla.png"],
  },
];

function Works() {
  const [getAllItems] = useState(allData);
  const [dataVisibleCount, setDataVisibleCount] = useState(6);
  const [dataIncrement] = useState(3);
  const [activeFilter, setActiveFilter] = useState("");
  const [visibleItems, setVisibleItems] = useState([]);
  const [noMorePost, setNoMorePost] = useState(false);

  useEffect(() => {
    setActiveFilter(filters[0].text.toLowerCase());
    setVisibleItems(getAllItems.filter((item) => item.id <= 6));
  }, [getAllItems]);

  const handleChange = (e) => {
    e.preventDefault();
    setActiveFilter(e.target.textContent.toLowerCase());
    let tempData;
    if (e.target.textContent.toLowerCase() === filters[0].text.toLowerCase()) {
      tempData = getAllItems.filter((data) => data.id <= dataVisibleCount);
    } else {
      tempData = getAllItems.filter(
        (data) =>
          data.category === e.target.textContent.toLowerCase() &&
          data.id <= dataVisibleCount
      );
    }
    setVisibleItems(tempData);
  };

  const handleLoadmore = (e) => {
    e.preventDefault();
    let tempCount = dataVisibleCount + dataIncrement;
    if (dataVisibleCount > getAllItems.length) {
      setNoMorePost(true);
    } else {
      setDataVisibleCount(tempCount);
      if (activeFilter === filters[0].text.toLowerCase()) {
        setVisibleItems(getAllItems.filter((data) => data.id <= tempCount));
      } else {
        setVisibleItems(
          getAllItems.filter(
            (data) => data.category === activeFilter && data.id <= tempCount
          )
        );
      }
    }
  };

  return (
    <section id="works">
      <div className="container">
        <Pagetitle title="Recent Works" />
        {/* Start Portfolio Filters */}
        <ScrollAnimation
          animateIn="fadeInUp"
          animateOut="fadeInOut"
          animateOnce={true}
        >
          <ul className="portfolio-filter list-inline">
            {filters.map((filter) => (
              <li className="list-inline-item" key={filter.id}>
                <button
                  onClick={handleChange}
                  className={
                    filter.text.toLowerCase() === activeFilter
                      ? "text-capitalize current"
                      : "text-capitalize"
                  }
                >
                  {filter.text}
                </button>
              </li>
            ))}
          </ul>
        </ScrollAnimation>
        {/* End Portfolio Filters */}

        {/* Start Portfolio Items */}
        <div className="row portfolio-wrapper">
          {visibleItems.map((item) => (
            <div className="col-md-4 col-sm-6 grid-item" key={item.id}>
              <Portfolio portfolio={item} />
            </div>
          ))}
        </div>
        {/* End Portfolio Items */}

        <div className="load-more text-center mt-4">
          <button
            className="btn btn-default"
            onClick={handleLoadmore}
            disabled={noMorePost ? "disabled" : null}
          >
            {noMorePost ? (
              "No more items"
            ) : (
              <span>
                <i className="fas fa-spinner"></i> Load more
              </span>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}

export default Works;
