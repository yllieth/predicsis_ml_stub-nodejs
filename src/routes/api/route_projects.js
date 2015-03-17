/**
 * Stub of /projects/...
 */

var express = require('express');
var router = express.Router();
var _ = require('lodash-contrib');



var project = {
  project: {
    id: '5363b7f76879644ae7000000',
    created_at: '2014-11-19T15:23:07.671Z',
    updated_at: '2014-11-20T09:15:28.959Z',
    title: 'My project',
    main_modality: '0',
    user_id: '5469b18470632d1479020000',
    dictionary_id: '5469b18470632d1479020001',
    target_variable_id: '5469ce4f776f7200010c0000',
    modalities_set_id: '5469b18470632d1479020003',
    preparation_rules_set_id: '5469b18470632d1479020008',
    classifier_id: '5469b18470632d1479020016',
    learning_dataset_id: 'learning_dataset_with_model',
    scoreset_ids: ['scoreset'],
    scoring_dataset_ids: ['scoring_dataset'],
    report_ids: ['train_classifier_evaluation', 'test_classifier_evaluation', 'univariate_supervised'],
    is_dictionary_verified: true
  }
};


//Last project has a 'fail' id
var projectList = {
  projects: [{
    id: 'upload',
    created_at: '2014-05-02T15:21:27.817Z',
    updated_at: '2014-05-02T15:21:27.817Z',
    title: 'Project 1',
    user_id: '5363b25c687964476d000000',
    learning_dataset_id: null,
    dictionary_id: null,
    scoreset_ids: [],
    scoring_dataset_ids: [],
    classifier_id: null,
    is_dictionary_verified: null
  }, {
    id: 'learn-config',
    created_at: '2014-05-02T15:21:27.817Z',
    updated_at: '2014-05-02T15:21:27.817Z',
    title: 'Project 1',
    user_id: '5363b25c687964476d000000',
    learning_dataset_id: 'learning_dataset_with_model',
    dictionary_id: '5469b18470632d1479020001',
    scoreset_ids: ['scoreset'],
    scoring_dataset_ids: ['scoring_dataset'],
    report_ids: ['train_classifier_evaluation', 'test_classifier_evaluation', 'univariate_supervised'],
    classifier_id: null,
    is_dictionary_verified: null
  }, {
    id: 'model_overview',
    created_at: '2014-05-02T15:21:27.817Z',
    updated_at: '2014-05-02T15:21:27.817Z',
    title: 'Project 2',
    user_id: '5363b25c687964476d000000',
    learning_dataset_id: 'learning_dataset_with_model',
    dictionary_id: '5469b18470632d1479020001',
    scoreset_ids: ['scoreset'],
    scoring_dataset_ids: ['scoring_dataset'],
    report_ids: ['train_classifier_evaluation', 'test_classifier_evaluation', 'univariate_supervised'],
    classifier_id: '5469b18470632d1479020016',
    target_variable_id: '5469ce4f776f7200010c0000',
    modalities_set_id: '5469b18470632d1479020003',
    preparation_rules_set_id: '5469b18470632d1479020008',
    is_dictionary_verified: true
  }, {
    id: 'format-score',
    created_at: '2014-05-02T15:21:27.817Z',
    updated_at: '2014-05-02T15:21:27.817Z',
    title: '',
    user_id: '5363b25c687964476d000000',
    learning_dataset_id: 'learning_dataset_with_model',
    dictionary_id: '5469b18470632d1479020001',
    scoreset_ids: ['scoreset'],
    scoring_dataset_ids: ['scoring_dataset'],
    report_ids: ['train_classifier_evaluation', 'test_classifier_evaluation', 'univariate_supervised'],
    classifier_id: '5469b18470632d1479020016',
    target_variable_id: '5469ce4f776f7200010c0000',
    modalities_set_id: '5469b18470632d1479020003',
    preparation_rules_set_id: '5469b18470632d1479020008',
    is_dictionary_verified: true
  }, {
    id: 'deploy-overview',
    created_at: '2014-05-02T15:21:27.817Z',
    updated_at: '2014-05-02T15:21:27.817Z',
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mi nibh, sodales consectetur diam eu, malesuada convallis ante. Nullam bibendum, sapien sit amet gravida congue, ex dui suscipit magna, sit amet tempor magna arcu id metus. Aenean convallis nisl at odio facilisis, id hendrerit lectus mattis.',
    user_id: '5363b25c687964476d000000',
    learning_dataset_id: 'learning_dataset_with_model',
    dictionary_id: '5469b18470632d1479020001',
    scoreset_ids: ['scoreset'],
    scoring_dataset_ids: ['scoring_dataset'],
    report_ids: ['train_classifier_evaluation', 'test_classifier_evaluation', 'univariate_supervised'],
    classifier_id: '5469b18470632d1479020016',
    target_variable_id: '5469ce4f776f7200010c0000',
    modalities_set_id: '5469b18470632d1479020003',
    preparation_rules_set_id: '5469b18470632d1479020008',
    is_dictionary_verified: true
  }, {
    id: 'fail',
    created_at: '2014-05-02T15:21:27.817Z',
    updated_at: '2014-05-02T15:21:27.817Z',
    title: 'One more, just for fun!!',
    user_id: '5363b25c687964476d000000',
    learning_dataset_id: 'learning_dataset_with_model',
    dictionary_id: '5469b18470632d1479020001',
    scoreset_ids: ['scoreset'],
    scoring_dataset_ids: ['scoring_dataset'],
    report_ids: ['train_classifier_evaluation', 'test_classifier_evaluation', 'univariate_supervised'],
    classifier_id: '5469b18470632d1479020016',
    target_variable_id: '5469ce4f776f7200010c0000',
    modalities_set_id: '5469b18470632d1479020003',
    preparation_rules_set_id: '5469b18470632d1479020008',
    is_dictionary_verified: true
  }]
};

// INDEX: get project list
router.get('/', function(req, res) {
  /*
   * error api case if :
   *   email = error@api
   *   passw = e
   */
  if (req.headers.authorization === 'Bearer errorApi________________________________________________________') {
    res.json(401, {
      status: 401,
      message: 'Invalid token'
    });
  } else {
    res.status(200).json(projectList);
  }
});


router.get('/:id', function(req, res) {

  //Get project from project list if id present
  var projectFromProjectList = projectList.projects
    .reduce(function(memo, project) {
      return project.id === req.params.id ? {project:project} : memo;
    }, null);
  var answer = JSON.parse(JSON.stringify(projectFromProjectList || project));
  if (req.params.id === 'dictionaryVerified') {
    //dictionary not yet inspected
    answer.project.target_variable_id = null;
    answer.project.main_modality = null;
  } else if (req.params.id === 'dictionaryNotVerified') {
    //dictionay inspected, not target selected yet
    answer.project.dictionary_id = null;
    answer.project.target_variable_id = null;
    answer.project.main_modality = null;
    answer.project.is_dictionary_verified  = null;
  } else if (req.params.id === 'targetSelected') {
    //dictionay inspected, not target selected yet
    answer.project.main_modality = null;
  }
  else if(req.params.id === 'targetFail') {
    answer.project.target_variable_id = 'fail';
  }
  else if(req.params.id === 'fail') {
    answer.project.id = 'fail';
  }
  res.status(200).json(answer);
});

router.patch('/:id', function(req, res) {
  res.status(200).json(project);
});

router.delete('/:id', function(req, res) {
  if(req.params.id === 'fail') {
    res.status(500).send();
  } else {
    res.status(204).send();
  }
});

// CREATE: add new project to the list
router.post('/', function(req, res) {
  var title = _.getPath(req, 'body.project.title');
  var newProject = projectList.projects[0];
  newProject.title = title;

  res.status(200).json({
    project: newProject
  });
});

module.exports = router;
