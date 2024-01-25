// pb_hooks/main.pb.js

routerAdd(
	'GET',
	'/',
	() => {
		return;
	},
	$apis.activityLogger($app)
);
