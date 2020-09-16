import React, { Component } from "react";

import Searchbar from "./Searchbar";
import ImageGallery from "./ImageGallery";
import Button from "./Button";
import Spinner from "./Spinner";
import Modal from "./Modal";

import ApiService from "../services/ApiService";

class App extends Component {
  state = {
    images: [],
    searchQuery: "",
    page: 0,
    isLoading: false,
    showModal: false,
    imgData: { src: "", alt: "" },
  };

  componentDidUpdate(prevProps, { searchQuery, page }) {
    const nextQuery = this.state.searchQuery;

    if (searchQuery !== nextQuery) {
      this.fetchAImages();
    }

    if (page < this.state.page) {
      this.handleScroll();
    }
  }

  handleScroll = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  fetchAImages = () => {
    const { searchQuery, page } = this.state;

    this.setState({ isLoading: true });

    ApiService.searchRequest(searchQuery, page)
      .then((images) =>
        this.setState((prevState) => ({
          images: [...prevState.images, ...images],
          page: prevState.page + 1,
        }))
      )
      .catch((error) => console.log(error))
      .finally(() => this.setState({ isLoading: false }));
  };

  handleSearchFormSubmit = (query) => {
    this.setState({
      images: [],
      searchQuery: query,
      page: 1,
    });
  };

  toggleModal = (src, alt) => {
    this.setState((state) => ({
      imgData: { src: src, alt: alt },
      showModal: !state.showModal,
    }));
  };

  render() {
    const { images, isLoading, showModal, imgData } = this.state;

    return (
      <>
        <Searchbar onSubmit={this.handleSearchFormSubmit} />

        <ImageGallery images={this.state.images} onClick={this.toggleModal} />
        {isLoading && <Spinner />}
        {images.length > 0 && !isLoading && (
          <Button
            title="Load more"
            className="Button"
            onClick={this.fetchAImages}
          />
        )}
        {showModal && <Modal imgData={imgData} onClose={this.toggleModal} />}
      </>
    );
  }
}

export default App;
