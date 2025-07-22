//    # AXV Portfolio
//    # Owner: Alvin Diaz Benedicto
//    # Developer : Alvin Diaz Benedicto
//    # Designer : Alvin Diaz Benedicto
//    # Date Created : APril 17, 2021
//    # Date Modified : APril 17, 2021 | AXV

$(document).ready(function () {

	var $doc = $(document), $body = $("body");
	var hvrEl = "";
	var lastScrollTop = 0;
	var currImageLink = 0,
		nextImageLink = "",
		prevImageLink = "",
		totalImageLink = $doc.find(".mdlGlBxItem:not(._dontEnlarge)").length - 1;

	$(".mscShBg.mscShBg6, .mscRdmShp3, .mscRdmShp2").on("mouseover", function (f) {
		$doc.find(".mscRdmShp3, .mscRdmShp2").addClass("hvrAni1");
	}).on("mouseout", function (f) {
		$doc.find(".mscRdmShp3, .mscRdmShp2").removeClass("hvrAni1");
	});

	$(".mscShBg.mscShBg3, .mscObjCld, .mscRdmShp1").on("mouseover", function (f) {
		$doc.find(".mscObjCld, .mscRdmShp1").addClass("hvrAni1");
	}).on("mouseout", function (f) {
		$doc.find(".mscObjCld, .mscRdmShp1").removeClass("hvrAni1");
	});

	$(".mscRdmShp4, .mscShBg.mscShBg1").on("mouseover", function (f) {
		$doc.find(".mscRdmShp4").addClass("hvrAni1");
	}).on("mouseout", function (f) {
		$doc.find(".mscRdmShp4").removeClass("hvrAni1");
	});

	$(".ldHdName").on("mouseenter", function (f) {
		$(this).find("span").hide().show();
	}).on("mouseleave", function (f) {
		$(this).find("span").hide().show();
	});

	$(".mdlFrBtCntnr").scroll();
	$doc.on("scroll DOMMouseScroll mousewheel", ".mdlFrBtCntnr", function (e) {
		var st = $(this).scrollTop();
		var $p = $(this).parents(".box");
		if (st >= 100) {
			// Down scroll
			$p.addClass("_scrolled");
		}
		else if (st < 100) {
			// Up scroll
			$p.removeClass("_scrolled");
		}
	});

	$doc.on("click", ".mdlGlBxItem:not(._dontEnlarge)", function () {
		currImageLink = $(this).index(".mdlGlBxItem:not(._dontEnlarge)");
		fnSetImgLink(currImageLink);
	});

	$doc.on("click", ".btnImgHandlerNext", fnNextImgLink);
	$doc.on("click", ".btnImgHandlerPrev", fnPrevImgLink);

	function fnSetImgLink(i) {
		const src = $doc.find(".mdlGlBxItem:not(._dontEnlarge)").eq(i).find("img").attr("src");
		const $el = $doc.find("#imgHandler");

		// console.log(i + ` of ${totalImageLink}` + " : " + src);

		$el.find("img").attr("src", src);
		$el.removeClass("overflowed");
		setTimeout(() => {
			var $reImgH = $el.find("img");
			$reImgH.outerHeight() > $el.outerHeight()
				&& $el.addClass("overflowed");
		}, 50, clearTimeout);
		
		if (!$("#imgHandler").is(":visible")) {
			$el.css("display", "flex").hide().fadeIn("fast");
		}
	}

	function fnNextImgLink (i) {
		if(currImageLink < totalImageLink) {
			currImageLink++;
			fnSetImgLink(currImageLink);
		}
	}
	
	function fnPrevImgLink () {
		if(currImageLink > 0) {
			currImageLink--;
			fnSetImgLink(currImageLink);
		}
	}

	$doc.on("click", ".btnImgHandlerExit", fnEscapeImgFull);

	$doc.on("keyup", function (e) {
		// Escape key maps to keycode `27`
		e.key === "Escape" && fnEscapeImgFull();
		
		if ($("#imgHandler").is(":visible")) {
			e.key === "ArrowRight" && fnNextImgLink();
			e.key === "ArrowLeft" && fnPrevImgLink();
		}
	});

	$doc.on("click", ".mdlGalleryTitle", fnLoadGlBxItem);

	fnInitBgThumb();
	function fnInitBgThumb() {
		setTimeout(() => {
			$doc.find("._filename").removeClass("_inithide");
		}, 3200, clearTimeout);
	}

	function fnEscapeImgFull() {
		$doc.find("#imgHandler").fadeOut("fast").removeClass("overflowed");
		$doc.find("#imgHandler > img").attr("src", "");

		console.log("Tite");
	}

	function fnLoadGlBxItem() {
		var $el = $doc.find(".mdlGlBxItem");
		setTimeout(() => {
			$el.each(function (i) {
				$el.eq(i).css("display", "flex");
			});
		}, 1000, clearTimeout);
	}

	// fnRandomBgColor();
	fnSetRandomGlBxBg();
	function fnSetRandomGlBxBg() {
		const $el = $doc.find(".mdlFrBtCntnr .mdlGlBxItem ._bg");
		$el.each(function (i) {
			$(this).addClass("" + fnRandomBgColor());
		});
	}

	function fnRandomBgColor() {
		const _bgRandomArr = ["_bglyellow", "_bglred", "_bglpurple", "_bglblue", "_bglgreen"];
		const r = Math.floor(Math.random() * _bgRandomArr.length);
		return _bgRandomArr[r];
	}

	function fnSetGlBxVAlign() {
		var $imgGlBx = $doc.find(".mdlGlBxItem .imgwrp");

		$imgGlBx.each(function (i) {
			$(this).find("img").outerHeight() > $imgGlBx.outerHeight()
				&& $(this).addClass("overflowed");
		});
	}

	// Initial Load Animate
	fnInitAnimation()
	function fnInitAnimation() {
		var ih = "_inithide";
		var ij = "hvrAni1";
		var $bgm = document.getElementById("bgMusic");
		$bgm.volume = "0.2";
		// - - - - -
		setTimeout(() => {
			$doc.find(".mscObjCld").removeClass(ih);
		}, 1400, clearTimeout);
		// - - - - -
		setTimeout(() => {
			$doc.find(".ctLrTxBgAlvin, .ctLrTxBgBndct").removeClass(ih);
		}, 2100, clearTimeout);
		// - - - - -
		setTimeout(() => {
			$doc.find(".ctLrTx_Hello").removeClass(ih);
		}, 2550, clearTimeout);
		setTimeout(() => {
			$doc.find(".ctLrTx_AB").removeClass(ih);
		}, 2750, clearTimeout);
		setTimeout(() => {
			$doc.find(".ctLrTx_UID").removeClass(ih);
		}, 3150, clearTimeout);
		// - - - - -
		setTimeout(() => {
			$doc.find(".mscWallFr1").removeClass(ih);
		}, 3400, clearTimeout);
		setTimeout(() => {
			$doc.find(".mscWallFr2").removeClass(ih);
		}, 3600, clearTimeout);
		setTimeout(() => {
			$doc.find(".mscWallFr3").removeClass(ih);
		}, 3800, clearTimeout);
		// - - - - -
		setTimeout(() => {
			$doc.find(".mscRdmShp3").removeClass(ij);
		}, 4000, clearTimeout);
		// - - - - -
		setTimeout(() => {
			$doc.find(".btnMscContact, ._lvlaMscRdMShp1").removeClass(ih);
		}, 4600, clearTimeout);
	}

	$doc.on("click", "#btnToggleMusic", fnBGMusic);

	function fnBGMusic() {
		const audio = document.querySelector("audio");
		const $s = $doc.find("#btnToggleMusic > span");
		if (audio.paused) {
			audio.volume = 0.8;
			audio.play();
			$s.text("on");
			$s.parents("#btnToggleMusic").addClass("_p");
		}
		else {
			audio.pause();
			$s.text("muted");
			$s.parents("#btnToggleMusic").removeClass("_p");
		}
	}

	$doc.on("click", ".btnMenu", function () {
		var ih = "_inithide";
		var $el = $doc.find("#mdlMainMenu");
		$el.show();
		// - - - - -
		setTimeout(() => {
			$el.find(".box").removeClass(ih);
		}, 200, clearTimeout);
		// - - - - -
		setTimeout(() => {
			$el.find(".mmBLNytRm").removeClass(ih);
		}, 600, clearTimeout);
		setTimeout(() => {
			$el.find(".mmBLNytRmCff").removeClass(ih);
		}, 1000, clearTimeout);
		setTimeout(() => {
			$el.find(".mmBLNytRmCffSmk").removeClass(ih);
		}, 1500, clearTimeout);
	});

	$doc.on("click", "#mdlMainMenu .btnCloseMdl", function () {
		$(this).parents(".mdl").fadeOut("fast");
	});

	$doc.on("click", "#mmBRLiGallery", function () {
		$doc.find("#mdlMainMenuGallery").fadeIn("fast").addClass("show");
		fnLoadGlBxItem();
		fnSetGlBxVAlign();
	});

	$doc.on("click", "#mdlMainMenuGallery .btnCloseMdl", function () {
		$(this).parents(".mdl").fadeOut().removeClass("show");
		$(this).parents(".mdl").find(".box").removeClass("_scrolled");
		$el.each(function (i) {
			$el.eq(i).css("display", "");
		});
	});

	function isNotNull(str) {
		if (str !== '' || str !== null || str !== undefined || typeof str !== 'undefined' || typeof str !== 'object' || str.length !== 0) return true;
		else return false;
	}

});
