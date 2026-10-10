// Argv is an array of command line arguments
console.log(process.argv);
console.log(process.argv[3]);

// Process.env is an object of environment variables
console.log(process.env.LOGNAME);

// pid is the process id
console.log(process.pid);

// cwd is the current working directory
console.log(process.cwd());

// title is the title of the process
console.log(process.title);

// memory usage
console.log(process.memoryUsage());

// uptime is the uptime of the process
console.log(process.uptime());

// platform is the platform of the operating system
console.log(process.platform);

// version is the version of the operating system
console.log(process.version);

// getgid is the getgid of the process
console.log(process.getgid());

// process.release is the release of the operating system
console.log(process.release);

// process.arch is the arch of the operating system
console.log(process.arch);

// process.type is the type of the process
console.log(process.type);

process.on('exit', (code) => {
    console.log(`Process exited with code ${code}`);
});

// exit is the exit code
process.exit(0);