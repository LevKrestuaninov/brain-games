install:
	npm ci
brain-games:
	node bin/games/brain-games/brain-games.js
brain-even:
	node bin/games/brain-even/brain-even.js
brain-calc:
	node bin/games/brain-calc/brain-calc.js
brain-gcd:
	node bin/games/brain-gcd/brain-gcd.js
brain-progression:
	node bin/games/brain-progression/brain-progression.js
brain-prime:
	node bin/games/brain-prime/brain-prime.js
publish:
	npm publish --dry-run
make lint:
	npx eslint .
	
