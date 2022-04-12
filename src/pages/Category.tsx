import React from 'react'
import Home from './Home'
import { CategoryType } from '../types/category'
type CategoryProps = {
  Categorys: CategoryType[]
}
const Category = (props: CategoryProps) => {
  return (
    <>
      <section className="section" id="Categorys">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-heading">
                <h2>Our Latest Categorys</h2>
                <span>Check out all of our Categorys.</span>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            {props.Categorys?.map((Category) => {
              return <>
                <div className="col-lg-4">
                  <div className="item">
                    <div className="thumb">
                      <div className="hover-content">
                        <ul>
                          <li><a href="single-Category.html"><i className="fa fa-eye"></i></a></li>
                          <li><a href="single-Category.html"><i className="fa fa-star"></i></a></li>
                          <li><a href="single-Category.html"><i className="fa fa-shopping-cart"></i></a></li>
                        </ul>
                      </div>
                      <img src="src/images/men-01.jpg" alt="" />
                    </div>
                    <div className="down-content">
                      <h4>{Category.name}</h4>
                    
                      <ul className="stars">
                        <li><i className="fa fa-star"></i></li>
                        <li><i className="fa fa-star"></i></li>
                        <li><i className="fa fa-star"></i></li>
                        <li><i className="fa fa-star"></i></li>
                        <li><i className="fa fa-star"></i></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </>
            })}
            <div className="col-lg-12">
              <div className="pagination">
                <ul>
                  <li>
                    <a href="#">1</a>
                  </li>
                  <li className="active">
                    <a href="#">2</a>
                  </li>
                  <li>
                    <a href="#">3</a>
                  </li>
                  <li>
                    <a href="#">4</a>
                  </li>
                  <li>
                    <a href="#">Next</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <Home /> */}
    </>

  )
}

export default Category