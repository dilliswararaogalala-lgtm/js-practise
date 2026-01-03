const task = async (filePath, mode, delay = 2000) => {
  const startTime = Date.now();
  await new Promise((resolve, _) => setTimeout(resolve, delay));
  const content = await Deno.readTextFile(filePath).catch((_) =>
    "file not found"
  );
  const endTime = Date.now();
  return { content, mode, startTime, endTime, duration: endTime - startTime };
};

const performTask = async (tasks) => {
  const parsedTasks = tasks.split(",");
  const mode = parsedTasks.length !== 1 ? "parallel" : "serial";
  const taskResults = parsedTasks.map((taskFilePath) =>
    task(taskFilePath, mode)
  );
  return await Promise.all(taskResults);
};

const performTasks = async (tasks) => {
  for (const task of tasks) {
    console.log(await performTask(task));
  }
};

export const readAndPerformTasks = async (taskFilePath) => {
  const tasks = (await Deno.readTextFile(taskFilePath)).split("\n");
  return performTasks(tasks);
};

