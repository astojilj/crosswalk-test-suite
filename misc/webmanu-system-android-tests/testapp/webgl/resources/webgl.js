/*
Copyright (c) 2013 Intel Corporation.

Redistribution and use in source and binary forms, with or without modification,
are permitted provided that the following conditions are met:

* Redistributions of works must retain the original copyright notice, this list
  of conditions and the following disclaimer.
* Redistributions in binary form must reproduce the original copyright notice,
  this list of conditions and the following disclaimer in the documentation
  and/or other materials provided with the distribution.
* Neither the name of Intel Corporation nor the names of its contributors
  may be used to endorse or promote products derived from this work without
  specific prior written permission.

THIS SOFTWARE IS PROVIDED BY INTEL CORPORATION "AS IS"
AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
ARE DISCLAIMED. IN NO EVENT SHALL INTEL CORPORATION BE LIABLE FOR ANY DIRECT,
INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING,
BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

Authors:
        Liu, Xin <xinx.liu@intel.com>

*/

var ORIGIN_SPEED = 0.5;
var multiple = 5;
var isRunning = false;
var isInit = true;
var testFlag = {
    size:false,
    speed:false
};

function running() {
    if (!isInit) {
        reStart();
        $("#running").attr('disabled', true);
        $("#paused").attr('disabled', false);
        $("#direction-1").attr('disabled', false);
        $("#direction-2").attr('disabled', false);
        $("#slider-1").slider('enable');
        $("#speed-1").slider('enable');
    } else {
        isInit = false;
        running();
    }
}

function paused() {
    stop();
    $("#running").attr('disabled', false);
    $("#paused").attr('disabled', true);
    $("#direction-1").attr('disabled', true);
    $("#direction-2").attr('disabled', true);
    $("#slider-1").slider('disable');
    $("#speed-1").slider('disable');
}

function start() {
    var c = document.getElementById("canvas");
    canvas = c;

    var gl = init();
    if (!gl) {
        return;
    }
    incAngle = ORIGIN_SPEED*multiple;
    currentAngle = 0;

    f();
    isRunning = true;
}
var f = function() {
    drawPicture(gl);
    requestId = window.requestAnimFrame(f, canvas);
};

function handleContextLost(event) {
    if (event) {
        event.preventDefault();
    }
    if (requestId !== undefined) {
        window.cancelAnimFrame(requestId);
        requestId = undefined;
    }
}

function handleContextRestored() {
    init();
    f();
}

function reStart() {
    if (isRunning) {
        return;
    }
    incAngle = bakAngle;
    handleContextRestored();
    isRunning = true;
}

function stop(event) {
    if (!isRunning) {
        return;
    }
    bakAngle = incAngle;
    incAngle = 0;
    handleContextLost(event);
    isRunning = false;
}

function resume() {
    if(!isRunning) {
        return;
    }
    stop();
    reStart();
}

function setToRight() {
    $("#direction-1").addClass("ui-btn-active");
    $("#direction-2").removeClass("ui-btn-active");
    if(incAngle < 0) {
        incAngle = -incAngle;
    }
    resume();
}

function setToLeft() {
    $("#direction-1").removeClass("ui-btn-active");
    $("#direction-2").addClass("ui-btn-active");
    if(incAngle > 0) {
        incAngle = -incAngle;
    }
    resume();
}

function setSize(value) {
    if(value < 7 || value > 30) {
        return;
    }
    if (value != viewDistance){
        viewDistance = value;
    };
    resume();
}

function setSpeed(value) {
    if(value <= 0 || value > 10) {
        return;
    }
    if(incAngle > 0) {
        incAngle = ORIGIN_SPEED*value;
    } else {
        incAngle = -ORIGIN_SPEED*value;
    }
    resume();
}

function checkEnable() {
    if (testFlag.size && testFlag.speed) {
        EnablePassButton();
    }
}

$(document).ready(function(){
    $("#slider-1").slider({
      tooltip: 'always'
    });
    $("#speed-1").slider({
      tooltip: 'always'
    });
    $(".tooltip-arrow").css("border-top-color","#D3D0D0");
    $(".tooltip-inner").css({"color":"black","background-color":"#D3D0D0"});
    start();
    $("#running").attr('disabled', true);
    $("#paused").attr('disabled', false);
    $("#direction-1").addClass("ui-btn-active");
    paused();
});
