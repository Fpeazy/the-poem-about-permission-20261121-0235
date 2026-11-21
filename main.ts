import { mkdirSync, writeFileSync } from "node:fs";

const POEM = `The Key

"Hold it for me," he says.
His hand shakes at the lock.

I fit the key, turn it halfway —
the bolt gives, then waits.
I stop, and leave the last click
in his fingers.

He turns it. The door opens.
His hand still shakes —
but the lock knows his hand.`;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", POEM, "utf8");
