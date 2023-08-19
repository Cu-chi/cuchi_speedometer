let CalcSpeed;
let speedText = '';
let lightState = false;
let handbrakeState = false;

let speed = [
	`<path d="M8.00024 149.417C12.4639 165.986 20.6239 181.36 31.883 194.413L36.0481 190.913C25.3175 178.472 17.5407 163.82 13.2867 148.03L8.00024 149.417Z" fill="black" fill-opacity="0.4"/>`,
	`<path d="M6.32981 97.4055C2.9383 114.22 3.3982 131.57 7.67587 148.186L12.9775 146.856C8.90071 131.02 8.4624 114.485 11.6947 98.4599L6.32981 97.4055Z" fill="black" fill-opacity="0.4"/>`,
	`<path d="M28.0118 50.0473C17.468 63.6708 10.1433 79.4491 6.57391 96.2274L11.9273 97.3372C15.3291 81.3466 22.3098 66.3092 32.3586 53.3253L28.0118 50.0473Z" fill="black" fill-opacity="0.4"/>`,
	`<path d="M68.4877 17.0023C52.9533 24.6693 39.352 35.6679 28.6792 49.1932L32.9946 52.5114C43.1663 39.6212 56.129 29.139 70.934 21.832L68.4877 17.0023Z" fill="black" fill-opacity="0.4"/>`,
	`<path d="M119.41 4.86781C102.043 5.04104 84.9347 9.04515 69.3375 16.5871L71.7439 21.4363C86.6087 14.2485 102.914 10.4324 119.465 10.2673L119.41 4.86781Z" fill="black" fill-opacity="0.4"/>`,
	`<path d="M170.716 16.0524C155.038 8.67541 137.887 4.85199 120.519 4.86196L120.522 10.2617C137.075 10.2522 153.42 13.8961 168.362 20.9267L170.716 16.0524Z" fill="black" fill-opacity="0.4"/>`,
	`<path d="M211.834 48.3638C201.036 34.9357 187.333 24.0608 171.728 16.5347L169.327 21.3864C184.199 28.559 197.259 38.9233 207.55 51.7209L211.834 48.3638Z" fill="black" fill-opacity="0.4"/>`,
	`<path d="M234.464 95.5956C230.799 78.8373 223.385 63.0999 212.764 49.5351L208.436 52.8372C218.558 65.7651 225.624 80.7636 229.117 96.735L234.464 95.5956Z" fill="black" fill-opacity="0.4"/>`,
	`<path d="M233.564 147.93C237.803 131.304 238.222 113.953 234.792 97.1463L229.429 98.2129C232.699 114.23 232.299 130.767 228.259 146.612L233.564 147.93Z" fill="black" fill-opacity="0.4"/>`,
	`<path d="M209.447 194.232C220.541 181.315 228.609 166.14 233.073 149.789L227.791 148.384C223.537 163.967 215.848 178.43 205.275 190.74L209.447 194.232Z" fill="black" fill-opacity="0.4"/>`
];

let speedActive = [
	`<g>
	<path d="M8.00024 149.417C12.4639 165.986 20.6239 181.36 31.883 194.413L36.0481 190.913C25.3175 178.472 17.5407 163.82 13.2867 148.03L8.00024 149.417Z" fill="${HudColor}" fill-opacity="{replacer}"/>
	</g>`,
	`<g>
	<path d="M6.32981 97.4055C2.9383 114.22 3.3982 131.57 7.67587 148.186L12.9775 146.856C8.90071 131.02 8.4624 114.485 11.6947 98.4599L6.32981 97.4055Z" fill="${HudColor}" fill-opacity="{replacer}"/>
	</g>`,
	`<g>
	<path d="M28.0118 50.0473C17.468 63.6708 10.1433 79.4491 6.57391 96.2274L11.9273 97.3372C15.3291 81.3466 22.3098 66.3092 32.3586 53.3253L28.0118 50.0473Z" fill="${HudColor}" fill-opacity="{replacer}"/>
	</g>`,
	`<g>
	<path d="M68.4877 17.0023C52.9533 24.6693 39.352 35.6679 28.6792 49.1932L32.9946 52.5114C43.1663 39.6212 56.129 29.139 70.934 21.832L68.4877 17.0023Z" fill="${HudColor}" fill-opacity="{replacer}"/>
	</g>`,
	`<g>
	<path d="M119.41 4.86781C102.043 5.04104 84.9347 9.04515 69.3375 16.5871L71.7439 21.4363C86.6087 14.2485 102.914 10.4324 119.465 10.2673L119.41 4.86781Z" fill="${HudColor}" fill-opacity="{replacer}"/>
	</g>`,
	`<g>
	<path d="M170.716 16.0524C155.038 8.67541 137.887 4.85199 120.519 4.86196L120.522 10.2617C137.075 10.2522 153.42 13.8961 168.362 20.9267L170.716 16.0524Z" fill="${HudColor}" fill-opacity="{replacer}"/>
	</g>`,
	`<g>
	<path d="M211.834 48.3638C201.036 34.9357 187.333 24.0608 171.728 16.5347L169.327 21.3864C184.199 28.559 197.259 38.9233 207.55 51.7209L211.834 48.3638Z" fill="${HudColor}" fill-opacity="{replacer}"/>
	</g>`,
	`<g>
	<path d="M234.464 95.5956C230.799 78.8373 223.385 63.0999 212.764 49.5351L208.436 52.8372C218.558 65.7651 225.624 80.7636 229.117 96.735L234.464 95.5956Z" fill="${HudColor}" fill-opacity="{replacer}"/>
	</g>`,
	`<g>
	<path d="M233.564 147.93C237.803 131.304 238.222 113.953 234.792 97.1463L229.429 98.2129C232.699 114.23 232.299 130.767 228.259 146.612L233.564 147.93Z" fill="${HudColor}" fill-opacity="{replacer}"/>
	</g>`,
	`<g>
	<path d="M209.447 194.232C220.541 181.315 228.609 166.14 233.073 149.789L227.791 148.384C223.537 163.967 215.848 178.43 205.275 190.74L209.447 194.232Z" fill="${HudColor}" fill-opacity="{replacer}"/>
	</g>`
];

let health = [
	`<path d="M8.44745 117.282C11.8419 130.272 17.4311 142.588 24.9737 153.696L26.9239 152.371C19.5321 141.485 14.0547 129.417 10.7282 116.686L8.44745 117.282Z" fill="#000" fill-opacity="0.4"/>`,
	`<path d="M5.23723 77.1656C4.02311 89.9073 4.89249 102.762 7.81123 115.224L10.1064 114.686C7.24606 102.473 6.39407 89.8761 7.58391 77.3892L5.23723 77.1656Z" fill="#000" fill-opacity="0.4"/>`,
	`<path d="M16.311 37.3459C10.6595 49.1209 7.00442 61.7534 5.49524 74.7269L7.83675 74.9993C9.31575 62.2853 12.8977 49.9054 18.4362 38.3659L16.311 37.3459Z" fill="#000" fill-opacity="0.4"/>`,
	`<path d="M39.8405 4.39442C30.5376 13.5621 22.8231 24.2122 17.0124 35.9095L19.1236 36.9582C24.818 25.4949 32.3782 15.0577 41.4951 6.07345L39.8405 4.39442Z" fill="#000" fill-opacity="0.4"/>`
];

let healthActive = [
	`<g filter="url(#hfilter0_d_0_1)">
	<path d="M8.44745 117.282C11.8419 130.272 17.4311 142.588 24.9737 153.696L26.9239 152.371C19.5321 141.485 14.0547 129.417 10.7282 116.686L8.44745 117.282Z" fill="#EEEEEE"/>
	</g>`,
	`<g filter="url(#hfilter1_d_0_1)">
	<path d="M5.23723 77.1656C4.02311 89.9073 4.89249 102.762 7.81123 115.224L10.1064 114.686C7.24606 102.473 6.39407 89.8761 7.58391 77.3892L5.23723 77.1656Z" fill="#EEEEEE"/>
	</g>`,
	`<g filter="url(#hfilter2_d_0_1)">
	<path d="M16.311 37.3459C10.6595 49.1209 7.00442 61.7534 5.49524 74.7269L7.83675 74.9993C9.31575 62.2853 12.8977 49.9054 18.4362 38.3659L16.311 37.3459Z" fill="#EEEEEE"/>
	</g>`,
	`<g filter="url(#hfilter3_d_0_1)">
	<path d="M39.8405 4.39442C30.5376 13.5621 22.8231 24.2122 17.0124 35.9095L19.1236 36.9582C24.818 25.4949 32.3782 15.0577 41.4951 6.07345L39.8405 4.39442Z" fill="#EEEEEE"/>
	</g>`
];

const ActiveSpeedBars = (speed) => {
	return Math.floor((speed / MaxBarSpeed) * 10)
};

const Fade = (elem, newInnerHtml, index) => {
	let opacity = 0.4;
	const interval = setInterval(() => {
		if (opacity >= 1) clearInterval(interval);

		if (ActiveSpeedBars(CalcSpeed) < index + 1) {
			clearInterval(interval);
			return;
		}
		elem.innerHTML = newInnerHtml.replace("{replacer}", opacity.toString());

		opacity += 0.005;
	}, 5);
};

document.addEventListener("DOMContentLoaded", () => {
	document.querySelector(':root').style.setProperty("--main-color", HudColor);
	if (ConversionMultiplier != 3.6)
		document.getElementById("unit").innerText = "mp/h";
});

window.addEventListener("message", function(event) {
	let item = event.data;
	if (item.ShowHud) {
		CalcSpeed = Math.ceil(item.CurrentCarKmh * ConversionMultiplier);

		if (CalcSpeed > 999)
			CalcSpeed = 999;

		if (CalcSpeed >= 100) {
			let tmpSpeed = CalcSpeed.toString().split('');
			speedText = '<span class="int1">' + tmpSpeed[0] + '</span><span class="int2">' + tmpSpeed[1] + '</span><span class="int3">' + tmpSpeed[2] + '</span>';
		}
		else if (CalcSpeed >= 10 && CalcSpeed < 100) {
			let tmpSpeed = CalcSpeed.toString().split('');
			speedText = '<span class="gray int1">0</span><span class="int2">' + tmpSpeed[0] + '</span><span class="int3">' + tmpSpeed[1] + '</span>';
		}
		else if (CalcSpeed > 0 && CalcSpeed < 10)
			speedText = '<span class="gray int1">0</span><span class="gray int2">0</span><span class="int3">' + Math.floor(CalcSpeed) + '</span>';
		else
			speedText = '<span class="gray int1">0</span><span class="gray int2">0</span><span class="gray int3">0</span>';

		let barsToActive = ActiveSpeedBars(CalcSpeed);

		for (i = 0; i < 10; i++) {
			let elem = document.getElementById(`g-${i + 1}`);
			if (i < barsToActive) {
				if (elem.innerHTML.match(`fill="${HudColor}"`) == null)
					Fade(elem, speedActive[i], i);
			}
			else if (elem.innerHTML.match(`fill="${HudColor}"`) != null)
				elem.innerHTML = speed[i];
		}

		document.getElementById("speeddisplay").innerHTML = speedText;
		document.getElementById("container").style.display = "block";
		
	} else if (item.HideHud) {
		document.getElementById("container").style.display = "none";
	}
	else if (item.fuel) {
		document.body.style.setProperty('--fuel-value', Math.floor(item.fuel) + "%");
	}
	else if (item.engine) {
		let barsToActive = Math.round((item.engine / 1000 * 4));
		
		for (i = 0; i < 4; i++) {
			let elem = document.getElementById(`healthbar-${i + 1}`);
			if (i + 1 <= barsToActive)
				elem.innerHTML = healthActive[i];
			else
				elem.innerHTML = health[i];
		}

		document.body.style.setProperty("--engine-health", barsToActive == 0 ? HudColor : "rgba(0,0,0,0.4)");
	}
	else if (item.light) {
		lightState = item.state;
		document.body.style.setProperty("--light-stroke", lightState ? HudColor : "rgba(0,0,0,0.4)");
	}
	else if (item.handbrake) {
		handbrakeState = item.state;

		document.body.style.setProperty("--handbrake-color", handbrakeState ? HudColor : "black");
		document.body.style.setProperty("--handbrake-opacity", handbrakeState ? "1.0" : "0.4");
	}
});
