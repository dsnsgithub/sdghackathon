function knowledgeCheck() {
	const listofTrash = [
		{
			type: "recycle",
			fileName: "ManilaPaper.jpg",
			attribution: `<a href="https://commons.wikimedia.org/wiki/File:ManilaPaper.jpg">No machine-readable author provided. NathanBeach assumed (based on copyright claims).</a>, <a href="https://creativecommons.org/licenses/by-sa/2.5">CC BY-SA 2.5</a>, via Wikimedia Commons`
		},
		{
			type: "recycle",
			fileName: "Paperball_2.jpeg",
			attribution: `<a href="https://commons.wikimedia.org/wiki/File:Paperball_2.jpeg">Nikhilesh Haval</a>, Copyrighted free use, via Wikimedia Commons`
		},
		{
			type: "recycle",
			fileName: "FileStack_retouched.jpg",
			attribution: `<a href="https://commons.wikimedia.org/wiki/File:FileStack_retouched.jpg">Niklas Bildhauer  (who also is User gerolsteiner91.</a>, <a href="https://creativecommons.org/licenses/by-sa/2.0">CC BY-SA 2.0</a>, via Wikimedia Commons`
		},
		{
			type: "recycle",
			fileName: "Cardboard_Honeycomb.jpg",
			attribution: `<a href="https://commons.wikimedia.org/wiki/File:Cardboard_Honeycomb_9093.jpg">User:Amada44</a>, <a href="https://creativecommons.org/licenses/by-sa/4.0">CC BY-SA 4.0</a>, via Wikimedia Commons`
		},
		{
			type: "recycle",
			fileName: "Cardboard_Box.jpg",
			attribution: `<a href="https://commons.wikimedia.org/wiki/File:CardBoard_Box.jpg">Nameer56</a>, <a href="https://creativecommons.org/licenses/by-sa/4.0">CC BY-SA 4.0</a>, via Wikimedia Commons`
		},
		{
			type: "recycle",
			fileName: "Beer_bottles_2018_G1.jpg",
			attribution: `<a href="https://commons.wikimedia.org/wiki/File:Beer_bottles_2018_G1.jpg">George Chernilevsky</a>, Public domain, via Wikimedia Commons`
		},
		{
			type: "recycle",
			fileName: "Arabic_Coca-Cola_and_Fanta_glass_bottle.jpg",
			attribution: `<a href="https://commons.wikimedia.org/wiki/File:Arabic_Coca-Cola_and_Fanta_glass_bottle.jpg">Bernard Ladenthin</a>, CC0, via Wikimedia Commons`
		},
		{
			type: "recycle",
			fileName: "Soda_Cans_Pexels_Breakingpic_3008.jpg",
			attribution: `<a href="https://commons.wikimedia.org/wiki/File:Soda_Cans_Pexels_Breakingpic_3008.jpg">Breakingpic</a>, CC0, via Wikimedia Commons`
		},
		{
			type: "recycle",
			fileName: "Weathered_Pepsi_can_1987-2020.jpg",
			attribution: `<a href="https://commons.wikimedia.org/wiki/File:Weathered_Pepsi_can_1987-2020.jpg">Visviva</a>, CC0, via Wikimedia Commons`
		},
		{
			type: "trash",
			fileName: "Styrofoam_peanuts.jfif",
			attribution: `<a href="https://commons.wikimedia.org/wiki/File:Styrofoam_peanuts.JPG">BrokenSphere</a>, <a href="https://creativecommons.org/licenses/by-sa/3.0">CC BY-SA 3.0</a>, via Wikimedia Commons`
		},
		{
			type: "trash",
			fileName: "Have_a_Nice_Day!_styrofoam_food_container.jfif",
			attribution: `<a href="https://commons.wikimedia.org/wiki/File:Have_a_Nice_Day!_styrofoam_food_container.JPG">BrokenSphere</a>, <a href="https://creativecommons.org/licenses/by-sa/3.0">CC BY-SA 3.0</a>, via Wikimedia Commons`
		},
		{
			type: "trash",
			fileName: "640px-A_depiction_of_needle.jfif",
			attribution: `<a href="https://commons.wikimedia.org/wiki/File:A_depiction_of_needle.JPG">Thamizhpparithi Maari</a>, <a href="https://creativecommons.org/licenses/by-sa/3.0">CC BY-SA 3.0</a>, via Wikimedia Commons`
		},
		{
			type: "trash",
			fileName: "Macro_sewing_machine_needles.jpg",
			attribution: `<a href="https://commons.wikimedia.org/wiki/File:Macro_sewing_machine_needles.jpg">gina pina</a>, <a href="https://creativecommons.org/licenses/by/2.0">CC BY 2.0</a>, via Wikimedia Commons`
		},
		{
			type: "trash",
			fileName: "Add_name_later_18_October_2021_3.jpg",
			attribution: `<a href="https://commons.wikimedia.org/wiki/File:Add_name_later_18_October_2021_3.jpg">Mtaylor848</a>, <a href="https://creativecommons.org/licenses/by-sa/4.0">CC BY-SA 4.0</a>, via Wikimedia Commons`
		},
		{
			type: "trash",
			fileName: "Brick.jpg",
			attribution: `<a href="https://commons.wikimedia.org/wiki/File:Brick.jpg">Andrewlister</a>, Public domain, via Wikimedia Commons`
		},
		{
			type: "trash",
			fileName: "Ethanolamine-chemical-liquid.jpg",
			attribution: `<a href="https://commons.wikimedia.org/wiki/File:Ethanolamine-chemical-liquid.jpg">Carbamatesalts</a>, <a href="https://creativecommons.org/licenses/by-sa/4.0">CC BY-SA 4.0</a>, via Wikimedia Commons`
		},
		{
			type: "trash",
			fileName: "GasolineContainer.jfif",
			attribution: `<a href="https://commons.wikimedia.org/wiki/File:GasolineContainer.JPG">WhisperToMe</a>, Public domain, via Wikimedia Commons`
		}
	];

	const trashItem = document.getElementById("recycleItem");
	const trashCanButton = document.getElementById("trashcan");
	const recycleCanButton = document.getElementById("recyclecan");
	const attributionText = document.getElementById("attribution");

	let currentType = "";
	let currentIndex = -1;

	function displayNewItem() {
		if (listofTrash.length < 1) {
			return alert("Congratulations on completing the knowledge check. Scroll down for more.");
		}

		currentIndex = Math.floor(Math.random() * listofTrash.length);
		const randomItem = listofTrash[currentIndex];
		trashItem.src = `../media/${randomItem.fileName}`;
		attributionText.innerHTML = randomItem.attribution;
		currentType = randomItem.type;
	}

	function processClick(type) {
		if (type == currentType) {
			if (type == "trash") {
				trashCanButton.style.backgroundColor = "green";
			}
			if (type == "recycle") {
				recycleCanButton.style.backgroundColor = "green";
			}

			setTimeout(() => {
				trashCanButton.style.backgroundColor = "";
				recycleCanButton.style.backgroundColor = "";
			}, 500);

			listofTrash.splice(currentIndex, 1);
			displayNewItem();
		} else {
			if (type == "trash") {
				trashCanButton.style.backgroundColor = "red";
			}
			if (type == "recycle") {
				recycleCanButton.style.backgroundColor = "red";
			}

			setTimeout(() => {
				trashCanButton.style.backgroundColor = "";
				recycleCanButton.style.backgroundColor = "";
			}, 500);
		}
	}

	displayNewItem();

	trashCanButton.addEventListener("click", () => {
		processClick("trash");
	});

	recycleCanButton.addEventListener("click", () => {
		processClick("recycle");
	});
}

function completeGame() {
	const emojiTrash = [
		{
			type: "recycle",
			emoji: "📄"
		},
		{
			type: "recycle",
			emoji: "📦"
		},
		{
			type: "recycle",
			emoji: "🍾"
		},
		{
			type: "recycle",
			emoji: "🥫"
		},
		{
			type: "recycle",
			emoji: "🥤"
		},
		{
			type: "trash",
			emoji: "🧱"
		},
		{
			type: "trash",
			emoji: "💩"
		},
		{
			type: "trash",
			emoji: "🧯"
		},
		{
			type: "trash",
			emoji: "⛽"
		},
		{
			type: "trash",
			emoji: "💉"
		},
		{
			type: "trash",
			emoji: "🧷"
		},
		{
			type: "trash",
			emoji: "☢️"
		}
	];

	const canvas = document.getElementById("game");
	const ctx = canvas.getContext("2d");
	const canvasRect = canvas.getBoundingClientRect();

	let coords = [];

	let mouseX;

	function renderCan(x) {
		// Clear the canvas
		ctx.clearRect(mouseX, 830, 100, 100);

		// Draw the emoji at the mouse position
		ctx.font = "70px sans-serif";
		ctx.fillText("🗑️", mouseX, 900);
	}

	canvas.addEventListener("mousemove", (event) => {
		// Clear the canvas
		ctx.clearRect(mouseX, 830, 100, 100);

		mouseX = event.clientX - canvasRect.left;
		renderCan(mouseX);
	});

	function displayGUI() {
		// Clear the canvas
		ctx.clearRect(0, 0, canvas.width, 200);

		ctx.font = "36px Oxygen";
		ctx.fillText("Objective: Avoid trash, collect recyclables.", 20, 40);

		let hearts = "";
		for (let i = 0; i < heartLevel; i++) {
			hearts += "❤️";
		}

		if (heartLevel < 1) {
			alert("You died. Try again.");
			return startGame();
		}

		ctx.fillText(hearts, 1250, 40);
		ctx.fillText(`Points: ${points}`, 1220, 100);
	}

	function checkCollision([x1, y1], [x2, y2], size) {
		if (x1 + size > x2 && x1 <= x2 + size && y2 + size >= y1 && y2 <= canvas.height - size) {
			return true;
		}

		return false;
	}

	function ensureSeperation() {
		let currentX, currentY;

		let collision = true;
		while (collision) {
			currentX = 72 + Math.floor(Math.random() * 200) * 6;
			currentY = 200 + Math.floor(Math.random() * 50) * 4;

			collision = false;
			for (const [x2, y2] of coords) {
				if (checkCollision([x2, y2], [currentX, currentY], 100)) {
					collision = true;
				}
			}
		}

		coords.push([currentX, currentY]);
		setTimeout(() => {
			coords.shift();
		}, 1000)
		return [currentX, currentY];
	}

	function spawnItem() {
		const randomItem = emojiTrash[Math.floor(Math.random() * emojiTrash.length)];
		let [currentX, currentY] = ensureSeperation();

		let speed = 2;

		ctx.font = "70px sans-serif";
		ctx.fillText(randomItem.emoji, currentX, currentY);
		renderCan(mouseX);

		const itemFall = setInterval(() => {
			ctx.clearRect(currentX, currentY - 100, 90, 90);

			if (currentY >= 950) {
				ctx.clearRect(currentX, currentY - 150, 200, 300);
				clearInterval(itemFall);
				return spawnItem();
			}

			if (checkCollision([mouseX, 900], [currentX, currentY], 72)) {
				if (randomItem.type == "trash") {
					heartLevel = heartLevel - 1;
					displayGUI();
				} else {
					points += 1;
					displayGUI();
				}

				ctx.clearRect(currentX, currentY - 150, 150, 200);
				clearInterval(itemFall);
				spawnItem();
			} else {
				currentY += speed;
				ctx.fillText(randomItem.emoji, currentX, currentY);
			}
		}, 10);
	}

	let heartLevel, points;
	function startGame() {
		// Clear the canvas
		ctx.clearRect(0, 0, canvas.width, canvas.height);

		coords = [];
		heartLevel = 3;
		points = 0;

		displayGUI();

		spawnItem();
		spawnItem();
		spawnItem();

		setInterval(spawnItem, 10000);
	}

	startGame();
}

knowledgeCheck();

const startGameButton = document.getElementById("startGame");
startGameButton.addEventListener("click", completeGame);
