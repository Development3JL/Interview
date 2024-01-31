import React from "react";

function Home() {
	return (
		<>
			<div class="wrapper">
				<div class="container">
					<div class="row">
						<div class="tab-content">
							<div id="mytasks" class="tab-pane fade in active">
								<div class="row m-b-20">
									<div class="col-md-12">
										<div class="pull-right">
											<button
												type="button"
												class="btn btn-primary waves-effect waves-light"
											>
												Mark as complete
											</button>
										</div>
									</div>
								</div>
								<div class="row">
									<div class="col-sm-6 col-md-4">
										<div class="panel" style={{ cursor: "pointer" }}>
											<div class="panel-header">
												<div class="due-date text-center pull-right">
													28
													<br />
													Dec
												</div>
												<div class="checkbox checkbox-primary ">
													<input class="todo-done" id="1" type="checkbox" />
													<label for="1"></label>
												</div>
											</div>
											<div class="panel-body">
												<div class="panel-inner">
													<div class="panel-inner-content">
														<h3>Task 1</h3>
														<p>
															Lorem ipsum dolor sit amet, consectetur adipiscing
															elit, sed do eiusmod tempor incididunt ut labore
															et dolore magna aliqua.
														</p>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div class="col-sm-6 col-md-4">
										<div class="panel" style={{ cursor: "pointer" }}>
											<div class="panel-header">
												<div class="due-date text-center pull-right">
													28
													<br />
													Dec
												</div>
												<div class="checkbox checkbox-primary ">
													<input class="todo-done" id="2" type="checkbox" />
													<label for="2"></label>
												</div>
											</div>
											<div class="panel-body">
												<div class="panel-inner">
													<div class="panel-inner-content">
														<h3>Task 2</h3>
														<p>
															Lorem ipsum dolor sit amet, consectetur adipiscing
															elit, sed do eiusmod tempor incididunt ut labore
															et dolore magna aliqua.
														</p>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div class="col-sm-6 col-md-4">
										<div class="panel" style={{ cursor: "pointer" }}>
											<div class="panel-header">
												<div class="due-date text-center pull-right">
													28
													<br />
													Dec
												</div>
												<div class="checkbox checkbox-primary ">
													<input class="todo-done" id="3" type="checkbox" />
													<label for="3"></label>
												</div>
											</div>
											<div class="panel-body">
												<div class="panel-inner">
													<div class="panel-inner-content">
														<h3>Task 3</h3>
														<p>
															Lorem ipsum dolor sit amet, consectetur adipiscing
															elit, sed do eiusmod tempor incididunt ut labore
															et dolore magna aliqua.
														</p>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div class="col-sm-6 col-md-4">
										<div class="panel" style={{ cursor: "pointer" }}>
											<div class="panel-header">
												<div class="due-date text-center pull-right">
													28
													<br />
													Dec
												</div>
												<div class="checkbox checkbox-primary ">
													<input class="todo-done" id="4" type="checkbox" />
													<label for="4"></label>
												</div>
											</div>
											<div class="panel-body">
												<div class="panel-inner">
													<div class="panel-inner-content">
														<h3>Task 4</h3>
														<p>
															Lorem ipsum dolor sit amet, consectetur adipiscing
															elit, sed do eiusmod tempor incididunt ut labore
															et dolore magna aliqua.
														</p>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div class="col-sm-6 col-md-4">
										<div class="panel" style={{ cursor: "pointer" }}>
											<div class="panel-header">
												<div class="due-date text-center pull-right">
													28
													<br />
													Dec
												</div>
												<div class="checkbox checkbox-primary ">
													<input class="todo-done" id="5" type="checkbox" />
													<label for="5"></label>
												</div>
											</div>
											<div class="panel-body">
												<div class="panel-inner">
													<div class="panel-inner-content">
														<h3>Task 5</h3>
														<p>
															Lorem ipsum dolor sit amet, consectetur adipiscing
															elit, sed do eiusmod tempor incididunt ut labore
															et dolore magna aliqua.
														</p>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>

							<div id="managetasks" class="tab-pane fade">
								<div class="row m-b-20 new-button">
									<div class="col-md-12">
										<div class="pull-right">
											<button
												type="button"
												class="btn btn-primary waves-effect waves-light new-task-btn"
											>
												<i class="fa fa-plus"></i> Add New Task
											</button>
										</div>
									</div>
								</div>
								{/* <!-- Created Tasks --> */}
								<div class="row created-tasks">
									<div class="col-sm-6 col-md-4">
										<div class="panel" style={{ cursor: "pointer" }}>
											<div class="panel-header">
												<div class="due-date text-center pull-right">
													28
													<br />
													Dec
												</div>
											</div>
											<div class="panel-body">
												<div class="panel-inner">
													<div class="panel-inner-content">
														<h3>Task 1</h3>
														<p>
															Lorem ipsum dolor sit amet, consectetur adipiscing
															elit, sed do eiusmod tempor incididunt ut labore
															et dolore magna aliqua.
														</p>
													</div>
												</div>
											</div>
											<div
												class="panel-footer"
												style={{ padding: "0", textAlign: "right" }}
											>
												<div class="icon-links quick-icon-links">
													<button
														data-toggle="tooltip"
														type="button"
														id=""
														title="Edit"
														class="btn btn icon-btn"
													>
														<i class="fa fa-pencil"></i>
													</button>
												</div>
												<div class="icon-links quick-icon-links">
													<button
														data-toggle="tooltip"
														type="button"
														id=""
														title="Unpublish"
														class="btn btn icon-btn"
													>
														<i class="fa fa-power-off"></i>
													</button>
												</div>
											</div>
										</div>
									</div>
									<div class="col-sm-6 col-md-4">
										<div class="panel" style={{ cursor: "pointer" }}>
											<div class="panel-header">
												<div class="due-date text-center pull-right">
													28
													<br />
													Dec
												</div>
											</div>
											<div class="panel-body">
												<div class="panel-inner">
													<div class="panel-inner-content">
														<h3>Task 2</h3>
														<p>
															Lorem ipsum dolor sit amet, consectetur adipiscing
															elit, sed do eiusmod tempor incididunt ut labore
															et dolore magna aliqua.
														</p>
													</div>
												</div>
											</div>
											<div
												class="panel-footer"
												style={{ padding: "0", textAlign: "right" }}
											>
												<div class="icon-links quick-icon-links">
													<button
														data-toggle="tooltip"
														type="button"
														id=""
														title="Edit"
														class="btn btn icon-btn"
													>
														<i class="fa fa-pencil"></i>
													</button>
												</div>
												<div class="icon-links quick-icon-links">
													<button
														data-toggle="tooltip"
														type="button"
														id=""
														title="Unpublish"
														class="btn btn icon-btn"
													>
														<i class="fa fa-power-off"></i>
													</button>
												</div>
											</div>
										</div>
									</div>
									<div class="col-sm-6 col-md-4">
										<div class="panel" style={{ cursor: "pointer" }}>
											<div class="panel-header">
												<div class="due-date text-center pull-right">
													28
													<br />
													Dec
												</div>
											</div>
											<div class="panel-body">
												<div class="panel-inner">
													<div class="panel-inner-content">
														<h3>Task 3</h3>
														<p>
															Lorem ipsum dolor sit amet, consectetur adipiscing
															elit, sed do eiusmod tempor incididunt ut labore
															et dolore magna aliqua.
														</p>
													</div>
												</div>
											</div>
											<div
												class="panel-footer"
												style={{ padding: "0", textAlign: "right" }}
											>
												<div class="icon-links quick-icon-links">
													<button
														data-toggle="tooltip"
														type="button"
														id=""
														title="Edit"
														class="btn btn icon-btn"
													>
														<i class="fa fa-pencil"></i>
													</button>
												</div>
												<div class="icon-links quick-icon-links">
													<button
														data-toggle="tooltip"
														type="button"
														id=""
														title="Unpublish"
														class="btn btn icon-btn"
													>
														<i class="fa fa-power-off"></i>
													</button>
												</div>
											</div>
										</div>
									</div>
									<div class="col-sm-6 col-md-4">
										<div class="panel" style={{ cursor: "pointer" }}>
											<div class="panel-header">
												<div class="due-date text-center pull-right">
													28
													<br />
													Dec
												</div>
											</div>
											<div class="panel-body">
												<div class="panel-inner">
													<div class="panel-inner-content">
														<h3>Task 4</h3>
														<p>
															Lorem ipsum dolor sit amet, consectetur adipiscing
															elit, sed do eiusmod tempor incididunt ut labore
															et dolore magna aliqua.
														</p>
													</div>
												</div>
											</div>
											<div
												class="panel-footer"
												style={{ padding: "0", textAlign: "right" }}
											>
												<div class="icon-links quick-icon-links">
													<button
														data-toggle="tooltip"
														type="button"
														id=""
														title="Edit"
														class="btn btn icon-btn"
													>
														<i class="fa fa-pencil"></i>
													</button>
												</div>
												<div class="icon-links quick-icon-links">
													<button
														data-toggle="tooltip"
														type="button"
														id=""
														title="Unpublish"
														class="btn btn icon-btn"
													>
														<i class="fa fa-power-off"></i>
													</button>
												</div>
											</div>
										</div>
									</div>
									<div class="col-sm-6 col-md-4">
										<div class="panel" style={{ cursor: "pointer" }}>
											<div class="panel-header">
												<div class="due-date text-center pull-right">
													28
													<br />
													Dec
												</div>
											</div>
											<div class="panel-body">
												<div class="panel-inner">
													<div class="panel-inner-content">
														<h3>Task 5</h3>
														<p>
															Lorem ipsum dolor sit amet, consectetur adipiscing
															elit, sed do eiusmod tempor incididunt ut labore
															et dolore magna aliqua.
														</p>
													</div>
												</div>
											</div>
											<div
												class="panel-footer"
												style={{ padding: "0", textAlign: "right" }}
											>
												<div class="icon-links quick-icon-links">
													<button
														data-toggle="tooltip"
														type="button"
														id=""
														title="Edit"
														class="btn btn icon-btn"
													>
														<i class="fa fa-pencil"></i>
													</button>
												</div>
												<div class="icon-links quick-icon-links">
													<button
														data-toggle="tooltip"
														type="button"
														id=""
														title="Unpublish"
														class="btn btn icon-btn"
													>
														<i class="fa fa-power-off"></i>
													</button>
												</div>
											</div>
										</div>
									</div>
								</div>
								{/* <!-- end Created Tasks --> */}

								{/* <!-- New Tasks --> */}
								<div class="row new-task_panel" style={{ display: "none" }}>
									<div class="panel panel-default">
										<div class="panel-heading">
											<h4 class="panel-title">
												<i class="fa fa-plus"></i> New Task
											</h4>
										</div>
										<div class="panel-body">
											<form role="form">
												<div class="form-group">
													<label class="control-label">Task Name</label>
													<input
														type="text"
														class="form-control"
														value="Some text value..."
													/>
												</div>
												<div class="form-group">
													<label class="control-label">Description</label>
													<textarea class="form-control" rows="5"></textarea>
												</div>
												<div class="col-md-6">
													<div class="row">
														<label class="col-md-4">Due Date</label>
														<div class="input-group col-md-8">
															<input
																type="text"
																class="form-control date-input"
																placeholder="mm/dd/yyyy"
																id="datepicker"
															/>
															<span class="input-group-addon">
																<i class="glyphicon glyphicon-calendar"></i>
															</span>
														</div>
													</div>
												</div>
												<div class="col-md-6">
													<div class="pull-right">
														<button
															type="submit"
															class="create-btn btn btn-primary waves-effect waves-light"
														>
															Create
														</button>
													</div>
												</div>
											</form>
										</div>
									</div>
								</div>
								{/* <!-- end New Tasks --> */}
							</div>

							<div id="completedtasks" class="tab-pane fade">
								<div class="row m-b-20">
									<div class="col-md-12">
										<div class="pull-right">
											<div class="icon-links quick-icon-links">
												<button
													data-toggle="tooltip"
													type="button"
													id="block-view"
													title="Block view"
													class="btn btn icon-btn"
												>
													<i class="block-view fa fa-th-large text-primary"></i>
												</button>
											</div>
											<div
												class="icon-links quick-icon-links"
												style={{ marginRight: "20px" }}
											>
												<button
													data-toggle="tooltip"
													type="button"
													id="list-view"
													title="List view"
													class="btn btn icon-btn"
												>
													<i class="list-view fa fa-th-list"></i>
												</button>
											</div>

											<button
												type="button"
												class="btn dropdown-toggle btn-primary waves-effect waves-light"
												data-toggle="dropdown"
												aria-expanded="true"
											>
												<i class="md md-file-download"></i> Export
											</button>
											<ul
												class="dropdown-menu"
												role="menu"
												style={{ right: "30px" }}
											>
												<li>
													<a href="#">PDF</a>
												</li>
												<li>
													<a href="#">Excel CSV</a>
												</li>
											</ul>
											<button
												type="button"
												class="btn btn-default waves-effect waves-light"
											>
												{" "}
												Delete All
											</button>
										</div>
									</div>
								</div>
								<div class="row completed-blocks">
									<div class="col-sm-6 col-md-4">
										<div class="panel" style={{ cursor: "pointer" }}>
											<div class="panel-header">
												<div class="due-date text-center pull-right">
													28
													<br />
													June
												</div>
											</div>
											<div class="panel-body">
												<div class="panel-inner">
													<div class="panel-inner-content">
														<h3>Task 0.5</h3>
														<p>
															Lorem ipsum dolor sit amet, consectetur adipiscing
															elit, sed do eiusmod tempor incididunt ut labore
															et dolore magna aliqua.
														</p>
													</div>
												</div>
											</div>
											<div
												class="panel-footer"
												style={{ padding: "0", textAlign: "right" }}
											>
												<div class="icon-links quick-icon-links">
													<button
														data-toggle="tooltip"
														type="button"
														id=""
														title="Delete"
														class="btn btn icon-btn"
													>
														<i class="fa fa-trash-o"></i>
													</button>
												</div>
											</div>
										</div>
									</div>
									<div class="col-sm-6 col-md-4">
										<div class="panel" style={{ cursor: "pointer" }}>
											<div class="panel-header">
												<div class="due-date text-center pull-right">
													28
													<br />
													June
												</div>
											</div>
											<div class="panel-body">
												<div class="panel-inner">
													<div class="panel-inner-content">
														<h3>Task </h3>
														<p>
															Lorem ipsum dolor sit amet, consectetur adipiscing
															elit, sed do eiusmod tempor incididunt ut labore
															et dolore magna aliqua.
														</p>
													</div>
												</div>
											</div>
											<div
												class="panel-footer"
												style={{ padding: "0", textAlign: "right" }}
											>
												<div class="icon-links quick-icon-links">
													<button
														data-toggle="tooltip"
														type="button"
														id=""
														title="Delete"
														class="btn btn icon-btn"
													>
														<i class="fa fa-trash-o"></i>
													</button>
												</div>
											</div>
										</div>
									</div>
									<div class="col-sm-6 col-md-4">
										<div class="panel" style={{ cursor: "pointer" }}>
											<div class="panel-header">
												<div class="due-date text-center pull-right">
													28
													<br />
													June
												</div>
											</div>
											<div class="panel-body">
												<div class="panel-inner">
													<div class="panel-inner-content">
														<h3>Task 2.0</h3>
														<p>
															Lorem ipsum dolor sit amet, consectetur adipiscing
															elit, sed do eiusmod tempor incididunt ut labore
															et dolore magna aliqua.
														</p>
													</div>
												</div>
											</div>
											<div
												class="panel-footer"
												style={{ padding: "0", textAlign: "right" }}
											>
												<div class="icon-links quick-icon-links">
													<button
														data-toggle="tooltip"
														type="button"
														id=""
														title="Delete"
														class="btn btn icon-btn"
													>
														<i class="fa fa-trash-o"></i>
													</button>
												</div>
											</div>
										</div>
									</div>
									<div class="col-sm-6 col-md-4">
										<div class="panel" style={{ cursor: "pointer" }}>
											<div class="panel-header">
												<div class="due-date text-center pull-right">
													28
													<br />
													June
												</div>
											</div>
											<div class="panel-body">
												<div class="panel-inner">
													<div class="panel-inner-content">
														<h3>Task 1.5</h3>
														<p>
															Lorem ipsum dolor sit amet, consectetur adipiscing
															elit, sed do eiusmod tempor incididunt ut labore
															et dolore magna aliqua.
														</p>
													</div>
												</div>
											</div>
											<div
												class="panel-footer"
												style={{ padding: "0", textAlign: "right" }}
											>
												<div class="icon-links quick-icon-links">
													<button
														data-toggle="tooltip"
														type="button"
														id=""
														title="Delete"
														class="btn btn icon-btn"
													>
														<i class="fa fa-trash-o"></i>
													</button>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="row completed-list" style={{ display: "none" }}>
									<table id="" class="table table-hover table-striped">
										<thead>
											<tr>
												<th>Due Date</th>
												<th>Task Name</th>
												<th>Desscription</th>
												<th></th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>28 June</td>
												<td>Task 0.5</td>
												<td>
													Lorem ipsum dolor sit amet, consectetur adipiscing
													elit, sed do eiusmod tempor incididunt ut labore et
													dolore magna aliqua.
												</td>
												<td>
													<div class="icon-links quick-icon-links">
														<button
															data-toggle="tooltip"
															type="button"
															id=""
															title="Delete"
															class="btn btn icon-btn"
														>
															<i class="fa fa-trash-o"></i>
														</button>
													</div>
												</td>
											</tr>
											<tr>
												<td>28 June</td>
												<td>Task</td>
												<td>
													Lorem ipsum dolor sit amet, consectetur adipiscing
													elit, sed do eiusmod tempor incididunt ut labore et
													dolore magna aliqua.
												</td>
												<td>
													<div class="icon-links quick-icon-links">
														<button
															data-toggle="tooltip"
															type="button"
															id=""
															title="Delete"
															class="btn btn icon-btn"
														>
															<i class="fa fa-trash-o"></i>
														</button>
													</div>
												</td>
											</tr>
											<tr>
												<td>28 June</td>
												<td>Task 2.0</td>
												<td>
													Lorem ipsum dolor sit amet, consectetur adipiscing
													elit, sed do eiusmod tempor incididunt ut labore et
													dolore magna aliqua.
												</td>
												<td>
													<div class="icon-links quick-icon-links">
														<button
															data-toggle="tooltip"
															type="button"
															id=""
															title="Delete"
															class="btn btn icon-btn"
														>
															<i class="fa fa-trash-o"></i>
														</button>
													</div>
												</td>
											</tr>
											<tr>
												<td>28 June</td>
												<td>Task 1.5</td>
												<td>
													Lorem ipsum dolor sit amet, consectetur adipiscing
													elit, sed do eiusmod tempor incididunt ut labore et
													dolore magna aliqua.
												</td>
												<td>
													<div class="icon-links quick-icon-links">
														<button
															data-toggle="tooltip"
															type="button"
															id=""
															title="Delete"
															class="btn btn icon-btn"
														>
															<i class="fa fa-trash-o"></i>
														</button>
													</div>
												</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Home;
