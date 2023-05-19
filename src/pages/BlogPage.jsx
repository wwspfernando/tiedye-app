

import React, { useState } from "react";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import BlogList from "../components/Blog/BlogList";

const BlogPage = () => {
  return (
    
    <div>
      <Header activeHeading={7} />
      <BlogList />
      <Footer />
    </div>
  );

};





// blog data







export default BlogPage;