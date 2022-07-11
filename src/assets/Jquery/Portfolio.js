$(function () {

    $("#All").removeClass("text-blue-600");
    $("#All").addClass("bg-blue-600 text-white");

    $("#All").click(function () {
        $("#Design").removeClass("bg-blue-600 text-white");
        $("#Development").removeClass("bg-blue-600 text-white");
        $("#Marketing").removeClass("bg-blue-600 text-white");
        $(this).removeClass("text-blue-600");
        $(this).addClass("bg-blue-600 text-white");
        $(".first").removeClass("hidden");
        $(".second").removeClass("hidden");
        $(".fourth").removeClass("hidden");
        $(".third").removeClass("hidden");
        $(".fifth").removeClass("hidden");
        $(".sixth").removeClass("hidden");
    });

    $("#Design").click(function () {
        $("#All").removeClass("bg-blue-600 text-white");
        $("#Development").removeClass("bg-blue-600 text-white");
        $("#Marketing").removeClass("bg-blue-600 text-white");
        $(this).removeClass("text-blue-600");
        $(this).addClass("bg-blue-600 text-white");
        $(".first").removeClass("hidden");
        $(".fourth").removeClass("hidden");
        $(".second").addClass("hidden");
        $(".third").addClass("hidden");
        $(".fifth").addClass("hidden");
        $(".sixth").addClass("hidden");
    });

    $("#Development").click(function () {
        $("#All").removeClass("bg-blue-600 text-white");
        $("#Design").removeClass("bg-blue-600 text-white");
        $("#Marketing").removeClass("bg-blue-600 text-white");
        $(this).removeClass("text-blue-600");
        $(this).addClass("bg-blue-600 text-white");
        $(".second").removeClass("hidden");
        $(".fifth").removeClass("hidden");
        $(".third").addClass("hidden");
        $(".sixth").addClass("hidden");
        $(".fourth").addClass("hidden");
        $(".first").addClass("hidden");
    });

    $("#Marketing").click(function () {
        $("#All").removeClass("bg-blue-600 text-white");
        $("#Development").removeClass("bg-blue-600 text-white");
        $("#Design").removeClass("bg-blue-600 text-white");
        $(this).removeClass("text-blue-600");
        $(this).addClass("bg-blue-600 text-white");
        $(".third").removeClass("hidden");
        $(".sixth").removeClass("hidden");
        $(".first").addClass("hidden");
        $(".second").addClass("hidden");
        $(".fourth").addClass("hidden");
        $(".fifth").addClass("hidden");
    });
});