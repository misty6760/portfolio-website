<script>
	import { fade } from 'svelte/transition';
	import { onMount } from 'svelte';

	onMount(() => {
		// Initialize any required properties here
	});
</script>

<link
	rel="stylesheet"
	href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap"
/>

<main class="min-h-screen scroll-smooth bg-gray-100">
	<!-- Hero Section -->
	<section
		id="home"
		class="bg-linear-to-b flex h-screen items-center justify-center from-gray-800 to-gray-400 text-white"
	>
		<div class="text-center" transition:fade>
			<h1 class="mb-4 text-4xl font-bold text-gray-900 md:text-6xl dark:text-white">Misty6760</h1>
			<p class="mb-8 text-xl">생각하는 개발자</p>
			<a
				href="#about"
				class="rounded-full bg-white px-6 py-2 font-bold text-amber-600 shadow-black/50 hover:bg-amber-100 active:shadow-inner"
			>
				자세히 보기
			</a>
		</div>
	</section>

	<!-- About Section -->
	<section id="about" class="bg-gray-400 py-20">
		<div class="mx-auto my-28 max-w-4xl px-4">
			<h2 class="mb-8 text-center text-3xl font-bold">About Me</h2>
			<div
				class="rounded-lg border border-white/10 bg-gray-500 p-6 text-center text-black drop-shadow-xl"
			>
				<p>a</p>
			</div>
		</div>
	</section>

	<!-- Skills Section -->
	<section id="skills" class="bg-gray-400 py-40">
		<div class="mx-auto my-28 max-w-2xl px-4">
			<h2 class="mb-8 text-center text-3xl font-bold">Skills</h2>
			<div class="grid grid-cols-2 gap-8 md:grid-cols-2">
				<div class="rounded-lg bg-gray-300 p-4 px-8 shadow-lg transition-transform hover:scale-105">
					<h3 class="mb-2 text-xl font-bold">Frontend</h3>
					<ul class="list-inside list-disc text-black">
						<li>HTML/CSS</li>
						<li>JavaScript</li>
						<li>Svelte</li>
					</ul>
				</div>
				<div class="rounded-lg bg-gray-300 p-4 px-8 shadow-lg transition-transform hover:scale-105">
					<h3 class="mb-2 text-xl font-bold">Coding</h3>
					<ul class="list-inside list-disc text-black">
						<li>Python</li>
						<li>C / C++</li>
					</ul>
				</div>
				<!-- …다른 스킬 카테고리 -->
			</div>
		</div>
	</section>

	<!-- Projects Section -->
	<section id="projects" class="bg-gray-400 py-60">
		<div class="mx-auto max-w-4xl px-4">
			<h2 class="mb-8 text-center text-3xl font-bold">Projects</h2>

			<div class="grid grid-cols-2 gap-8 md:grid-cols-2">
				<div class="overflow-hidden rounded-lg bg-gray-300 p-4 shadow-lg">
					<h3 class="mb-2 text-xl font-bold">🧱 방화벽 프로젝트</h3>
					<ul class="list-inside text-black">
						<li>파이썬으로 방화벽의 기본 원리를 알아보다</li>
						<li>
							상태:
							<span class="font-bold text-green-700">완료</span>
						</li>
						<li>
							<button
								on:click={() => window.open('https://github.com/misty6760/Firewall-Project')}
								class="text-black/50 hover:underline"
							>
								GitHub
							</button>
						</li>
					</ul>
				</div>

				<div class="overflow-hidden rounded-lg bg-gray-300 p-4 shadow-lg">
					<h3 class="mb-2 text-xl font-bold">프로젝트 제목</h3>
					<p class="mb-4 text-gray-700">프로젝트 설명을 작성하세요.</p>
					<div class="flex space-x-4">
						<a href="#Demo" class="text-gray-900 hover:text-gray-500">Demo</a>
						<a href="#GitHub" class="text-gray-900 hover:text-gray-500">GitHub</a>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Contact Section -->
	<section id="contact" class="bg-gray-400 py-20">
		<div class="mx-auto max-w-4xl px-4">
			<h2 class="mb-8 text-center text-3xl font-bold">Contact</h2>
			<div class="flex flex-col items-center space-y-4">
				<a href="mailto:your.email@example.com" class="text-gray-900 hover:text-gray-500">
					your.email@example.com
				</a>
				<div class="flex space-x-6">
					<a
						href="https://github.com/misty6760"
						target="_blank"
						class="text-gray-900 hover:text-gray-500">GitHub</a
					>
				</div>
			</div>
		</div>
	</section>
</main>
