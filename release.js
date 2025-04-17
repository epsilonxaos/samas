import { execSync } from 'child_process'
import fs from 'fs'

// Leer argumentos de la línea de comandos
const args = process.argv.slice(2)
const versionType = args[0] // major, minor o patch
const date = args[1] // Fecha en formato deseado (ejemplo: "04122024")

if (!versionType || !['major', 'minor', 'patch'].includes(versionType)) {
	console.error('Debes especificar el tipo de versión: major, minor o patch')
	console.error('Formato: npm run release -- [version] [fecha]')
	process.exit(1)
}

if (!date) {
	console.error('Debes especificar una fecha en el formato DDMMYYYY')
	process.exit(1)
}

// Crear mensaje de commit
const message = `chore(Release): :bookmark: Actualización (${versionType.charAt(0).toUpperCase() + versionType.slice(1)}) LTS ${date}`

// Actualizar la versión del proyecto
execSync(`npm version ${versionType} -m "${message}"`, { stdio: 'inherit' })

// Leer la nueva versión del package.json
const { version } = JSON.parse(fs.readFileSync('package.json', 'utf-8'))

// Ruta del archivo README.md
const readmePath = 'README.md'

// Actualizar el archivo README.md
if (fs.existsSync(readmePath)) {
	let readmeContent = fs.readFileSync(readmePath, 'utf-8')
	const badgePattern = /!\[Static Badge\]\(https:\/\/img\.shields\.io\/badge\/Version-.*?-purple\)/
	const newBadge = `![Static Badge](https://img.shields.io/badge/Version-${version}-purple)`

	if (badgePattern.test(readmeContent)) {
		// Reemplazar la línea del badge existente
		readmeContent = readmeContent.replace(badgePattern, newBadge)
		console.log(`Badge actualizado en README.md con la nueva versión: ${version}`)
	} else {
		// Si no encuentra el badge, agregarlo al inicio
		readmeContent = `${newBadge}\n\n${readmeContent}`
		console.log(`Badge agregado al inicio del README.md con la nueva versión: ${version}`)
	}

	fs.writeFileSync(readmePath, readmeContent)
	console.log(`README.md actualizado con la nueva versión: ${version}`)
	// Realizar un commit con los cambios en README.md
	execSync(`git add ${readmePath}`, { stdio: 'inherit' })
	execSync(`git commit -m "refactor(docs): :memo: Actualización de README.md con la versión ${version}"`, {
		stdio: 'inherit',
	})
	console.log('Cambios en README.md confirmados en un nuevo commit.')
} else {
	console.warn(`No se encontró el archivo ${readmePath}. No se pudo actualizar la versión en el README.md.`)
}
