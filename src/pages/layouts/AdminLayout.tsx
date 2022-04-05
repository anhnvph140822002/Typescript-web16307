import React from 'react'
import { Outlet } from 'react-router-dom';
import "./style.css"
import "./bootstrap.min.css"
import "./style1.css"
import "./fontawesome-all.css"
import "./materialdesignicons.min.css"
import "./flag-icon.min.css"
import "./c3.css"
import "./chartist.css"
import "./morris.css"
type Props = {}

const AdminLayout = (props: Props) => {
  return (
    <>
      <div className="dashboard-main-wrapper">
        <div className="dashboard-header">
          <nav className="navbar navbar-expand-lg bg-white fixed-top">
            <div className="collapse navbar-collapse " id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto navbar-right-top">
                <li className="nav-item">
                  <div id="custom-search" className="top-search-bar">
                    <input className="form-control" type="text" placeholder="Search.." />
                  </div>
                </li>

              </ul>
            </div>
          </nav>
        </div>
        <div className="nav-left-sidebar sidebar-dark">
          <div className="menu-list">
            <nav className="navbar navbar-expand-lg navbar-light">
              <a className="d-xl-none d-lg-none" href="/admin/product">Dashboard</a>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav flex-column">
                  <li className="nav-divider">
                    Menu
                  </li>
                  <li className="nav-item ">
                    <a className="nav-link active" href="#" data-toggle="collapse" aria-expanded="false" data-target="#submenu-1" aria-controls="submenu-1"><i className="fa fa-fw fa-user-circle" />Dashboard <span className="badge badge-success">6</span></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/admin/product/add" data-toggle="collapse" aria-expanded="false" data-target="#submenu-2" aria-controls="submenu-2"><i className="fa fa-fw fa-rocket" />Thêm</a>
                  </li>
                  <li className="nav-divider">
                    Features
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#" data-toggle="collapse" aria-expanded="false" data-target="#submenu-6" aria-controls="submenu-6"><i className="fas fa-fw fa-file" />
                      Pages </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/" data-toggle="collapse" aria-expanded="false" data-target="#submenu-7" aria-controls="submenu-7"><i className="fas fa-fw fa-inbox" />Logout</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#" data-toggle="collapse" aria-expanded="false" data-target="#submenu-8" aria-controls="submenu-8"><i className="fas fa-fw fa-columns" />Icons</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#" data-toggle="collapse" aria-expanded="false" data-target="#submenu-9" aria-controls="submenu-9"><i className="fas fa-fw fa-map-marker-alt" />Maps</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#" data-toggle="collapse" aria-expanded="false" data-target="#submenu-10" aria-controls="submenu-10"><i className="fas fa-f fa-folder" />Menu Level</a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
        <div className="dashboard-wrapper">
          <div className="dashboard-ecommerce">
            <div className="container-fluid dashboard-content ">
              <div className="ecommerce-widget">
                <div className="row">
                  <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
                    <div className="card">
                      <div className="card-body">
                        <h5 className="text-muted">Total Revenue</h5>
                        <div className="metric-value d-inline-block">
                          <h1 className="mb-1">$12099</h1>
                        </div>
                        <div className="metric-label d-inline-block float-right text-success font-weight-bold">
                          <span><i className="fa fa-fw fa-arrow-up" /></span><span>5.86%</span>
                        </div>
                      </div>
                      <div id="sparkline-revenue" />
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
                    <div className="card">
                      <div className="card-body">
                        <h5 className="text-muted">Affiliate Revenue</h5>
                        <div className="metric-value d-inline-block">
                          <h1 className="mb-1">$12099</h1>
                        </div>
                        <div className="metric-label d-inline-block float-right text-success font-weight-bold">
                          <span><i className="fa fa-fw fa-arrow-up" /></span><span>5.86%</span>
                        </div>
                      </div>
                      <div id="sparkline-revenue2" />
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
                    <div className="card">
                      <div className="card-body">
                        <h5 className="text-muted">Refunds</h5>
                        <div className="metric-value d-inline-block">
                          <h1 className="mb-1">0.00</h1>
                        </div>
                        <div className="metric-label d-inline-block float-right text-primary font-weight-bold">
                          <span>N/A</span>
                        </div>
                      </div>
                      <div id="sparkline-revenue3" />
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
                    <div className="card">
                      <div className="card-body">
                        <h5 className="text-muted">Avg. Revenue Per User</h5>
                        <div className="metric-value d-inline-block">
                          <h1 className="mb-1">$28000</h1>
                        </div>
                        <div className="metric-label d-inline-block float-right text-secondary font-weight-bold">
                          <span>-2.00%</span>
                        </div>
                      </div>
                      <div id="sparkline-revenue4" />
                    </div>
                  </div>
                </div>
             
                <div className="row">
                  <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
                    <div className="card border-3 border-top border-top-primary">
                      <div className="card-body">
                        <h5 className="text-muted">Sales</h5>
                        <div className="metric-value d-inline-block">
                          <h1 className="mb-1">$12099</h1>
                        </div>
                        <div className="metric-label d-inline-block float-right text-success font-weight-bold">
                          <span className="icon-circle-small icon-box-xs text-success bg-success-light"><i className="fa fa-fw fa-arrow-up" /></span><span className="ml-1">5.86%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
                    <div className="card border-3 border-top border-top-primary">
                      <div className="card-body">
                        <h5 className="text-muted">New Customer</h5>
                        <div className="metric-value d-inline-block">
                          <h1 className="mb-1">1245</h1>
                        </div>
                        <div className="metric-label d-inline-block float-right text-success font-weight-bold">
                          <span className="icon-circle-small icon-box-xs text-success bg-success-light"><i className="fa fa-fw fa-arrow-up" /></span><span className="ml-1">10%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
                    <div className="card border-3 border-top border-top-primary">
                      <div className="card-body">
                        <h5 className="text-muted">Visitor</h5>
                        <div className="metric-value d-inline-block">
                          <h1 className="mb-1">13000</h1>
                        </div>
                        <div className="metric-label d-inline-block float-right text-success font-weight-bold">
                          <span className="icon-circle-small icon-box-xs text-success bg-success-light"><i className="fa fa-fw fa-arrow-up" /></span><span className="ml-1">5%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
                    <div className="card border-3 border-top border-top-primary">
                      <div className="card-body">
                        <h5 className="text-muted">Total Orders</h5>
                        <div className="metric-value d-inline-block">
                          <h1 className="mb-1">1340</h1>
                        </div>
                        <div className="metric-label d-inline-block float-right text-danger font-weight-bold">
                          <span className="icon-circle-small icon-box-xs text-danger bg-danger-light bg-danger-light "><i className="fa fa-fw fa-arrow-down" /></span><span className="ml-1">4%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                <Outlet />
                </div>
                <br />
                <br />
                <div className="row">
                  <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12">
                    <div className="card">
                      <h5 className="card-header">Revenue by Category</h5>
                      <div className="card-body">
                        <div id="c3chart_category" style={{ height: 420 }} />
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-7 col-lg-7 col-md-12 col-sm-12 col-12">
                    <div className="card">
                      <h5 className="card-header"> Total Revenue</h5>
                      <div className="card-body">
                        <div id="morris_totalrevenue" />
                      </div>
                      <div className="card-footer">
                        <p className="display-7 font-weight-bold"><span className="text-primary d-inline-block">$26,000</span><span className="text-success float-right">+9.45%</span></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AdminLayout