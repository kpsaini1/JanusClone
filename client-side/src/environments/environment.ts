// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

const context = 'http://localhost:8080/';
export const environment = {
  production: false,
  context: context,
  bootContext: 'http://localhost/',

  // API calls for the VP functionality group
  addNewCategory: context + 'vp/category',
  getAllCategories: context + 'vp/category',
  editCurrentCategory: context + 'vp/category/update',

  // Location API calls
  editLocation: context + 'vp/location/update',
  deleteLocation: context + 'vp/location/delete',
  reactivateLocation: context + 'vp/location/reactivate',
  addLocation: context + 'vp/location/create',

  // Trainer API calls
  addNewTrainer: context + 'vp/trainer/create',
  deleteTrainer: context + 'vp/trainer/delete',
  getAllTitles: context + 'vp/trainer/titles/',
  getAllTiers: context + 'types/trainer/role/all',
  editTrainer: context + 'vp/trainer/update',

  // VP HOME API calls


  /* Evaluation Service API endpoints */
  apiAllQCTraineeOverallNotes: (traineeId: Number) =>
    environment.context + `qc/note/trainee/${traineeId}`,

  apiAllTraineeNotes: (traineeId: Number) =>
    environment.context + `all/notes/trainee/${traineeId}`,

  apiQCTraineeNote: (traineeId: Number, week: Number) =>
    environment.context + `/qc/note/trainee/${traineeId}/for/${week}`,

  apiTraineeNote: (traineeId: Number, week: Number) =>
    environment.context + `/trainer/note/trainee/${traineeId}/for/${week}`,

  /* Reporting service API endpoints */
  apiBatchComparisonAvgEndpoint: (skill: string, training: string, startDate) =>
    environment.context + `/all/reports/compare/skill/${skill}/training/${training}/date/${startDate}`,

  apifetchBatchWeekPieChart: (batchId: Number, weekId: Number) =>
    environment.context + `all/reports/batch/${batchId}/week/${weekId}/pie`,

  apiPieChartCurrentWeekQCStatus: (batchId: Number) =>
    environment.context + `all/reports/batch/{batchId}/chart`,

  apiAllBatchesCurrentWeekQCStackedBarChart: (batchId: Number, week: Number) =>
    environment.context + `all/reports/batch/${batchId}/week/${week}/bar-batch-week-avg`,

  apiBatchWeekAvgBarChart: (batchId: Number, week: Number) =>
    environment.context + `all/reports/batch/${batchId}/week/${week}/bar-batch-week-avg`,

  apiBatchWeekSortedBarChart: (batchId: Number, week: Number) =>
    environment.context + `all/reports/batch/${batchId}/week/${week}/bar-batch-weekly-sorted`,

  apiBatchOverallTraineeBarChart: (batchId: Number, traineeId: Number) =>
    environment.context + `all/reports/batch/${batchId}/overall/trainee/${traineeId}/bar-batch-overall-trainee`,

  apiBatchOverallBarChart: (batchId: Number) =>
    environment.context + `all/reports/batch/${batchId}/overall/bar-batch-overall`,

  apiBatchWeekTraineeBarChart: (batchId: Number, weekId: Number, traineeId: Number) =>
    environment.context + `all/reports/batch/${batchId}/week/${weekId}/trainee/${traineeId}/bar-batch-week-trainee`,

  apiTraineeUpToWeekLineChart: (batchId: Number, weekId: Number, traineeId: Number) =>
    environment.context + `all/reports/batch/${batchId}/week/${weekId}/trainee/${traineeId}/line-trainee-up-to-week`,

  apiTraineeOverallLineChart: (batchId: Number, traineeId: Number) =>
    environment.context + `all/reports/batch/${batchId}/overall/trainee/${traineeId}/line-trainee-overall`,

  apiBatchOverallLineChart: (batchId: Number) =>
    environment.context + `all/reports/batch/${batchId}/overall/line-batch-overall`,

  apiCurrentBatchesLineChart: this.context + 'all/reports/dashboard',
  apiCurrentPanelsLineChart: this.context + 'all/reports/biweeklyPanelResults',

  apiTraineeUpToWeekRadarChart: (week: Number, traineeId: Number) =>
    environment.context + `all/reports/week/${week}/trainee/${traineeId}/radar-trainee-up-to-week`,

  apiTraineeOverallRadarChart: (traineeId: Number) =>
    environment.context + `all/reports/trainee/${traineeId}/radar-trainee-overall`,

  apiBatchOverallRadarChart: (batchId: Number) =>
    environment.context + `all/reports/batch/${batchId}/overall/radar-batch-overall`,

  apiBatchAllTraineesRadarChart: (batchId: Number) =>
    environment.context + `all/reports/batch/${batchId}/radar-batch-all-trainees`,

  apiBatchWeekAverageValue: (batchId: Number, weekId: Number) =>
    environment.context + `all/assessments/average/${batchId}/${weekId}`,

  apiTechnologiesForTheWeek: (batchId: Number, weekId: Number) =>
    environment.context + `all/assessments/categories/batch/${batchId}/week/${weekId}`,

  apiPanelBatchAllTrainees: (batchId: Number) =>
    environment.context + `all/reports/batch/${batchId}/panel-batch-all-trainees`,

  /* Evaluation service API endpoints */
  apiFetchAllQCTraineeNotes: (batchId: Number, weekId: Number) =>
    environment.context + `qc/note/trainee/${batchId}/${weekId}`,

  apiFetchAllQCBatchNotes: (batchId: Number, weekId: Number) =>
    environment.context + `qc/note/batch/${batchId}/${weekId}`,
};
