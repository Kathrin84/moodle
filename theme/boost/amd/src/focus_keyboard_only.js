// This file is part of Moodle - http://moodle.org/
//
// Moodle is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Moodle is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Moodle.  If not, see <http://www.gnu.org/licenses/>.

/**
 * Custom form error event handler to manipulate the bootstrap markup and show
 * nicely styled errors in an mform.
 *
 * @module     theme_boost/focus_keyboard_only
 * @copyright  2017 Kathrin Osswald <kathrin.osswald@uni-ulm.de>
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */
define(['jquery'], function($) {
    $("body").on("click", "*", function(e) {
        if ($(this).is(":focus")) {
            console.log("This is focus");
        }
        if ($(this).css("outline-style") === "auto") {
            console.log("This outline style = auto");
        }
        if (($(this).is(":focus") || $(this).is(e.target)) && $(this).css("outline-style") === "auto") {
            console.log("All together");
            $(this).css("outline", "none").on("blur", function() {
                $(this).off("blur").css("outline", "");
            });
        }
    });
    return {};
});
