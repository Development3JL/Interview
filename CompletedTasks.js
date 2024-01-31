import React from "react";

function CompletedTasks() {
	return (
		<>
			<div id="completedtasks" className="tab-pane fade">
				<div className="row m-b-20">
					<div className="col-md-12">
						<div className="pull-right">
							<div className="icon-links quick-icon-links">
								<button
									data-toggle="tooltip"
									type="button"
									id="block-view"
									title="Block view"
									className="btn btn icon-btn"
								>
									<i className="block-view fa fa-th-large text-primary"></i>
								</button>
							</div>
							<div
								className="icon-links quick-icon-links"
								style={{ marginRight: "20px" }}
							>
								<button
									data-toggle="tooltip"
									type="button"
									id="list-view"
									title="List view"
									className="btn btn icon-btn"
								>
									<i className="list-view fa fa-th-list"></i>
								</button>
							</div>

							<button
								type="button"
								className="btn dropdown-toggle btn-primary waves-effect waves-light"
								data-toggle="dropdown"
								aria-expanded="true"
							>
								<i className="md md-file-download"></i> Export
							</button>
							<ul
								className="dropdown-menu"
								role="menu"
								style={{ right: "30px" }}
							>
								<li>
									<a href="javascript:void(0);">PDF</a>
								</li>
								<li>
									<a href="javascript:void(0);">Excel CSV</a>
								</li>
							</ul>
							<button
								type="button"
								className="btn btn-default waves-effect waves-light"
							>
								{" "}
								Delete All
							</button>
						</div>
					</div>
				</div>
				<div className="row completed-blocks">
					<div className="col-sm-6 col-md-4">
						<div className="panel" style={{ cursor: "pointer" }}>
							<div className="panel-header">
								<div className="due-date text-center pull-right">
									28
									<br />
									June
								</div>
							</div>
							<div className="panel-body">
								<div className="panel-inner">
									<div className="panel-inner-content">
										<h3>Task 0.5</h3>
										<p>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit,
											sed do eiusmod tempor incididunt ut labore et dolore magna
											aliqua.
										</p>
									</div>
								</div>
							</div>
							<div
								className="panel-footer"
								style={{ padding: "0", textAlign: "right" }}
							>
								<div className="icon-links quick-icon-links">
									<button
										data-toggle="tooltip"
										type="button"
										id=""
										title="Delete"
										className="btn btn icon-btn"
									>
										<i className="fa fa-trash-o"></i>
									</button>
								</div>
							</div>
						</div>
					</div>
					<div className="col-sm-6 col-md-4">
						<div className="panel" style={{ cursor: "pointer" }}>
							<div className="panel-header">
								<div className="due-date text-center pull-right">
									28
									<br />
									June
								</div>
							</div>
							<div className="panel-body">
								<div className="panel-inner">
									<div className="panel-inner-content">
										<h3>Task </h3>
										<p>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit,
											sed do eiusmod tempor incididunt ut labore et dolore magna
											aliqua.
										</p>
									</div>
								</div>
							</div>
							<div
								className="panel-footer"
								style={{ padding: "0", textAlign: "right" }}
							>
								<div className="icon-links quick-icon-links">
									<button
										data-toggle="tooltip"
										type="button"
										id=""
										title="Delete"
										className="btn btn icon-btn"
									>
										<i className="fa fa-trash-o"></i>
									</button>
								</div>
							</div>
						</div>
					</div>
					<div className="col-sm-6 col-md-4">
						<div className="panel" style={{ cursor: "pointer" }}>
							<div className="panel-header">
								<div className="due-date text-center pull-right">
									28
									<br />
									June
								</div>
							</div>
							<div className="panel-body">
								<div className="panel-inner">
									<div className="panel-inner-content">
										<h3>Task 2.0</h3>
										<p>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit,
											sed do eiusmod tempor incididunt ut labore et dolore magna
											aliqua.
										</p>
									</div>
								</div>
							</div>
							<div
								className="panel-footer"
								style={{ padding: "0", textAlign: "right" }}
							>
								<div className="icon-links quick-icon-links">
									<button
										data-toggle="tooltip"
										type="button"
										id=""
										title="Delete"
										className="btn btn icon-btn"
									>
										<i className="fa fa-trash-o"></i>
									</button>
								</div>
							</div>
						</div>
					</div>
					<div className="col-sm-6 col-md-4">
						<div className="panel" style={{ cursor: "pointer" }}>
							<div className="panel-header">
								<div className="due-date text-center pull-right">
									28
									<br />
									June
								</div>
							</div>
							<div className="panel-body">
								<div className="panel-inner">
									<div className="panel-inner-content">
										<h3>Task 1.5</h3>
										<p>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit,
											sed do eiusmod tempor incididunt ut labore et dolore magna
											aliqua.
										</p>
									</div>
								</div>
							</div>
							<div
								className="panel-footer"
								style={{ padding: "0", textAlign: "right" }}
							>
								<div className="icon-links quick-icon-links">
									<button
										data-toggle="tooltip"
										type="button"
										id=""
										title="Delete"
										className="btn btn icon-btn"
									>
										<i className="fa fa-trash-o"></i>
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="row completed-list" style={{ display: "none" }}>
					<table id="" className="table table-hover table-striped">
						<thead>
							<tr>
								<th>Due Date</th>
								<th>Task Name</th>
								<th>Description</th>
								<th></th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>28 June</td>
								<td>Task 0.5</td>
								<td>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
									do eiusmod tempor incididunt ut labore et dolore magna aliqua.
								</td>
								<td>
									<div className="icon-links quick-icon-links">
										<button
											data-toggle="tooltip"
											type="button"
											id=""
											title="Delete"
											className="btn btn icon-btn"
										>
											<i className="fa fa-trash-o"></i>
										</button>
									</div>
								</td>
							</tr>
							<tr>
								<td>28 June</td>
								<td>Task</td>
								<td>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
									do eiusmod tempor incididunt ut labore et dolore magna aliqua.
								</td>
								<td>
									<div className="icon-links quick-icon-links">
										<button
											data-toggle="tooltip"
											type="button"
											id=""
											title="Delete"
											className="btn btn icon-btn"
										>
											<i className="fa fa-trash-o"></i>
										</button>
									</div>
								</td>
							</tr>
							<tr>
								<td>28 June</td>
								<td>Task 2.0</td>
								<td>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
									do eiusmod tempor incididunt ut labore et dolore magna aliqua.
								</td>
								<td>
									<div className="icon-links quick-icon-links">
										<button
											data-toggle="tooltip"
											type="button"
											id=""
											title="Delete"
											className="btn btn icon-btn"
										>
											<i className="fa fa-trash-o"></i>
										</button>
									</div>
								</td>
							</tr>
							<tr>
								<td>28 June</td>
								<td>Task 1.5</td>
								<td>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
									do eiusmod tempor incididunt ut labore et dolore magna aliqua.
								</td>
								<td>
									<div className="icon-links quick-icon-links">
										<button
											data-toggle="tooltip"
											type="button"
											id=""
											title="Delete"
											className="btn btn icon-btn"
										>
											<i className="fa fa-trash-o"></i>
										</button>
									</div>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</>
	);
}

export default CompletedTasks;
