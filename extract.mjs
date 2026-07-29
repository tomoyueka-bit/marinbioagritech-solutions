import { rm, mkdir } from 'node:fs/promises';
import * as tar from 'tar';

await rm('public', { recursive: true, force: true });
await mkdir('public', { recursive: true });
await tar.x({ file: 'site.tar.gz', cwd: 'public' });
console.log('MarinBio static website extracted to public/');
