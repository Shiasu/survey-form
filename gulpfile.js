let gulp = require("gulp");
let watch = require("gulp-watch");
let autoprefixer = require("gulp-autoprefixer");

gulp.task("prefix", function() {
	return gulp.src("src/*.css")
		.pipe(prefixer({
			overrideBrowserslist: ["last 10 versions"],
			cascade: false
		}))
		.pipe(gulp.dest("build"))
});

gulp.task("html", function() {
	return gulp.src("src/*.html")
		.pipe(gulp.dest("build"))
});

gulp.task("build", gulp.series("prefix", "html"));

gulp.task("watch", function() {
	gulp.watch("src/*.html", gulp.series("html"))
	gulp.watch("src/*.css", gulp.series("prefix"))
});

gulp.task("dev", gulp.series("build", "watch"));