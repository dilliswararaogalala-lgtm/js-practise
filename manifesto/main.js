const dbg = (x) => {
  console.log(x);
  return x;
};

const task = (filePath) => {
  const start = Date.now();
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Deno.readTextFile(filePath);
      const duration = Date.now() - start;
      resolve(duration);
    }, 2000);
  });
};

const determineMode = (result, duration) => {
  const serialMode = {
    mode: "Serial",
    duration,
  };

  const parallelMode = {
    mode: "Parallel",
    duration,
  };

  return result.length !== 1 ? parallelMode : serialMode;
};

const performTask = async (tasks) => {
  const parsedTasks = tasks.split(",");
  const startTime = Date.now();
  const taskResults = parsedTasks.map(async (taskFilePath) =>
    await task(taskFilePath)
  );
  const result = await Promise.all(taskResults);
  const duration = Date.now() - startTime;
  return determineMode(result, duration);
};

const performTasks = async (tasks) => {
  for (const task of tasks) {
    console.log(`${task} is started\n`);
    dbg(await performTask(task));
    console.log(`\n${task} is ended\n`);
  }
};

const readAndPerformTasks = async (sourceFilePath) => {
  const tasks = (await Deno.readTextFile(sourceFilePath)).split("\n");
  await performTasks(tasks);
};

readAndPerformTasks("receipes/tasks");
