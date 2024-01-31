import React from "react";

function Login() {
	return (
		<>
			<body>
				<div class="wrapper-page">
					<div class="panel-pages login">
						<div class="panel-body">
							<div class="logo text-center m-b-20">
								<a href="#">
									<img src="assets/images/synrgise-logo-white.png" />
								</a>
							</div>
							<form class="form-horizontal m-t-20" action="index.html">
								<div class="form-group">
									<div class="col-xs-12">
										<input
											class="form-control input-lg"
											type="text"
											required=""
											placeholder="Username"
										/>
									</div>
								</div>

								<div class="form-group">
									<div class="col-xs-12">
										<input
											class="form-control input-lg"
											type="password"
											required=""
											placeholder="Password"
										/>
									</div>
								</div>

								<div class="form-group">
									<div class="col-xs-12 col-md-8">
										<div class="checkbox checkbox-primary">
											<input id="checkbox-signup" type="checkbox" />
											<label for="checkbox-signup">Remember me</label>
										</div>
									</div>
									<div class="col-xs-12 col-md-4">
										<button
											class="btn btn-black btn-block waves-effect waves-light"
											type="submit"
										>
											Log In
										</button>
									</div>
								</div>

								<div class="form-group m-t-30">
									<div class="col-sm-7">
										<a href="#">
											<i class="fa fa-lock m-r-5"></i> Forgot your password?
										</a>
									</div>
									<div class="col-sm-5 text-right">
										<a href="#">Create an account</a>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>

				<script>var resizefunc = [];</script>

				{/* <!-- Main  --> */}
				<script src="assets/js/jquery.min.js"></script>
				<script src="assets/js/bootstrap.min.js"></script>
			</body>
		</>
	);
}

export default Login;
