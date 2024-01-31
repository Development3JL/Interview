import React from "react";

function MyTasks() {
	return (
		<>
			<div id="mytasks" className="tab-pane fade in active">
				<div className="row m-b-20">
					<div className="col-md-12">
						<div className="pull-right">
							<button
								type="button"
								className="btn btn-primary waves-effect waves-light"
							>
								Mark as complete
							</button>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-sm-6 col-md-4">
						<div className="panel" style={{ cursor: "pointer" }}>
							<div className="panel-header">
								<div className="due-date text-center pull-right">
									28
									<br />
									Dec
								</div>
								<div className="checkbox checkbox-primary ">
									<input className="todo-done" id="1" type="checkbox" />
									<label for="1"></label>
								</div>
							</div>
							<div className="panel-body">
								<div className="panel-inner">
									<div className="panel-inner-content">
										<h3>Task 1</h3>
										<p>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit,
											sed do eiusmod tempor incididunt ut labore et dolore magna
											aliqua.
										</p>
									</div>
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
									Dec
								</div>
								<div className="checkbox checkbox-primary ">
									<input className="todo-done" id="2" type="checkbox" />
									<label for="2"></label>
								</div>
							</div>
							<div className="panel-body">
								<div className="panel-inner">
									<div className="panel-inner-content">
										<h3>Task 2</h3>
										<p>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit,
											sed do eiusmod tempor incididunt ut labore et dolore magna
											aliqua.
										</p>
									</div>
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
									Dec
								</div>
								<div className="checkbox checkbox-primary ">
									<input className="todo-done" id="3" type="checkbox" />
									<label for="3"></label>
								</div>
							</div>
							<div className="panel-body">
								<div className="panel-inner">
									<div className="panel-inner-content">
										<h3>Task 3</h3>
										<p>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit,
											sed do eiusmod tempor incididunt ut labore et dolore magna
											aliqua.
										</p>
									</div>
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
									Dec
								</div>
								<div className="checkbox checkbox-primary ">
									<input className="todo-done" id="4" type="checkbox" />
									<label for="4"></label>
								</div>
							</div>
							<div className="panel-body">
								<div className="panel-inner">
									<div className="panel-inner-content">
										<h3>Task 4</h3>
										<p>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit,
											sed do eiusmod tempor incididunt ut labore et dolore magna
											aliqua.
										</p>
									</div>
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
									Dec
								</div>
								<div className="checkbox checkbox-primary ">
									<input className="todo-done" id="5" type="checkbox" />
									<label for="5"></label>
								</div>
							</div>
							<div className="panel-body">
								<div className="panel-inner">
									<div className="panel-inner-content">
										<h3>Task 5</h3>
										<p>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit,
											sed do eiusmod tempor incididunt ut labore et dolore magna
											aliqua.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default MyTasks;
