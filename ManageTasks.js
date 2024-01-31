import React from "react";

function ManageTasks() {
	return (
		<>
			<div id="managetasks" className="tab-pane fade">
				<div className="row m-b-20 ">
					<div className="col-md-12">
						<div className="pull-right">
							<button
								type="button"
								className="btn btn-primary waves-effect waves-light new-task-btn"
							>
								<i className="fa fa-plus"></i> Add New Task
							</button>
						</div>
					</div>
				</div>
				<div className="row new-task_panel" style={{ display: "none" }}>
					<div className="panel panel-default">
						<div className="panel-heading">
							<h4 className="panel-title">
								<i className="fa fa-plus"></i> New Task
							</h4>
						</div>
						<div className="panel-body">
							<form role="form">
								<div className="form-group">
									<label className="control-label">Task Name</label>
									<input
										type="text"
										className="form-control"
										value="Some text value..."
									/>
								</div>
								<div className="form-group">
									<label className="control-label">Description</label>
									<textarea className="form-control" rows="5"></textarea>
								</div>
								<div className="col-md-6">
									<div className="row">
										<label className="col-md-4">Due Date</label>
										<div className="input-group col-md-8">
											<input
												type="text"
												className="form-control date-input"
												placeholder="mm/dd/yyyy"
												id="datepicker"
											/>
											<span className="input-group-addon">
												<i className="glyphicon glyphicon-calendar"></i>
											</span>
										</div>
									</div>
								</div>
								<div className="col-md-6">
									<div className="pull-right">
										<button
											type="submit"
											className="create-btn btn btn-primary waves-effect waves-light"
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
		</>
	);
}

export default ManageTasks;
