# fs-dir

Wrapper utility for file system operations using Node.js.

This is ESM-only.

# Installation

Install via npm, directly from the repository.

```bash
npm install https://github.com/alexwkleung/fs-dir
```

Import fs-dir.

```typescript
//import everything
import * as fsDir from 'fs-dir'
```

or 

```typescript
//import what you need from the package
import { readDirectory, removeExtension, filterByExtension, parseFile } from 'fs-dir'
```

# Functions

1. Read contents of a directory.

```typescript
//type signature
function readDirectory(dirStr: string): string[]
```

2. Remove extensions from files.

```typescript
//type signature
function removeExtension(dirArr: string[]): string[]
```

3. Filter directory files by extension.

```typescript
//type signature
function filterByExtension(dirArr: string[], extension: string): string[]
```

4. Read a file from a directory.

```typescript
//type signature
function parseFile(path: string): string
```