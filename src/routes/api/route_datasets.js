/**
 * Stub of /datasets/...
 */
var express = require('express');
var router = express.Router();
var S3_URL = 'http://localhost:8005';
var datasetList = {
  'datasets': [
    {
      // learning dataset (just after upload)
      id: 'learning_dataset',
      created_at: '2014-12-14T15:09:08.112Z',
      updated_at: '2014-12-14T15:08:57.970Z',
      name: 'Learning dataset',
      header: null,
      separator: null,
      user_id: '541b06dc617070006d060000',
      source_ids: ['54904b136170700007330000'],
      parent_dataset_id: null,
      sampling: 100,
      nb_of_lines: 50002,
      children_dataset_ids: [],
      dictionary_ids: [],
      generated_dictionaries_ids: [],
      data_file: {
        id: '54904b09776f720001650000',
        filename: 'learning-dataset.csv',
        type: 'S3',
        size: 538296,
        url: S3_URL + '/download/file/from/s3/learning-dataset.csv'
      },
      main_modality: null,
      classifier_id: null,
      dataset_id: null,
      job_ids: ['54904b146170700007360000'],
      preview: [
        'CustID\tDUALPLAY\tFRAGILITE\tTV\tTOY\tVar1\tVar2\tVar3\tVar4\tVar5\tVar6\tVar7\tVar8\tVar9\tVar10\tVar11\tVar12\tVar13\tVar14\tVar15\tVar16\tVar17\tVar18\tVar19\tVar20\tVar21\tVar22\tVar23\tVar24\tVar25\tVar26\tVar27\tVar28\tVar29\tVar30\tVar31\tVar32\tVar33\tVar34\tVar35\tVar36\tVar37\tVar38\tVar39\tVar40\tVar41\tVar42\tVar43\tVar44\tVar45\tVar46\tVar47\tVar48\tVar49\tVar50\tVar51\tVar52\tVar53\tVar54\tVar55\tVar56\tVar57\tVar58\tVar59\tVar60\tVar61\tVar62\tVar63\tVar64\tVar65\tVar66\tVar67\tVar68\tVar69\tVar70\tVar71\tVar72\tVar73\tVar74\tVar75\tVar76\tVar77\tVar78\tVar79\tVar80\tVar81\tVar82\tVar83\tVar84\tVar85\tVar86\tVar87\tVar88\tVar89\tVar90\tVar91\tVar92\tVar93\tVar94\tVar95\tVar96\tVar97\tVar98\tVar99\tVar100\tVar101\tVar102\tVar103\tVar104\tVar105\tVar106\tVar107\tVar108\tVar109\tVar110\tVar111\tVar112\tVar113\tVar114\tVar115\tVar116\tVar117\tVar118\tVar119\tVar120\tVar121\tVar122\tVar123\tVar124\tVar125\tVar126\tVar127\tVar128\tVar129\tVar130\tVar131\tVar132\tVar133\tVar134\tVar135\tVar136\tVar137\tVar138\tVar139\tVar140\tVar141\tVar142\tVar143\tVar144\tVar145\tVar146\tVar147\tVar148\tVar149\tVar150\tVar151\tVar152\tVar153\tVar154\tVar155\tVar156\tVar157\t',
        '00001\t0\t0\t0\t0\t\t\t\t\t\t1526\t7\t\t\t\t\t\t184\t\t\t\t\t\t\t\t464\t580\t\t14\t128\t\t\t166.56\t\t\t\t\t\t\t0\t\t\t3570\t\t\t\t\t\t0\t\t\t\t\t\t\t\t\t\t\t\t\t4.076907\t\t\t\t\t\t\t\t9\t\t\t\t\t\t\t\t36\t35\t\t1350864\t\t0\t\t\t7333.11\t\t5\t\t12\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t104\t\t\t168\t117625.6\t\t\t\t\t\t1175\t\t\t\t6\t\t720\t8\t\t\t\t\t\t0\t1212385\t69134\t\t\t\t\t\t185\t\t\t0\t9\t\t\t\t\t397579\t\t\t\t1812252\t\t\t\t\t\t\t142\t\t\t38418\t\t\t\t\t\t\t\t\t\t0\t\t\t\t\t\t\t\t0\t\t\t\t\t\t\t\t462\t\t\tbZkvyxLkBI\tRO12\t\ttaul\t1K8T\tlK27\tka_ns41\tnQUveAzAF7\t\t\tdXGu\t9_Y1\tFbIm\tVpdQ\thaYg\tme75fM6ugJ\tkIsH\t\tuKAI\tL84s\tXfqtO3UdzaXh_\t\t\t\tXTbPUYD\tsH5Z\tcJvF\tFzaX\t1YVfGrO\toslk\tfXVEsaq\tjySVZNlOJy\t\t\txb3V\tRAYp\tF2FyR07IdsN7I\t\t',
        '00002\t0\t1\t0\t0\t\t\t\t\t\t525\t0\t\t\t\t\t\t0\t\t\t\t\t\t\t\t168\t210\t\t2\t24\t\t\t353.52\t\t\t\t\t\t\t0\t\t\t4764966\t\t\t\t\t\t0\t\t\t\t\t\t\t\t\t\t\t\t\t5.408032\t\t\t\t\t\t\t\t9\t\t\t\t\t\t\t3\t26\t0\t\t2872928\t\t3\t\t\t151098.9\t\t25\t\t2\t\t\t\t\t\t\t\t\t58158\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t40\t\t\t40\t-356411.6\t\t\t\t\t\t590\t\t\t\t72\t\t0\t\t\t\t\t\t\t8\t4136430\t357038\t\t\t\t\t\t0\t\t\t0\t9\t\t\t\t\t278334\t\t\t\t10439160\t\t\t\t\t\t\t32\t\t\t238572\t\t\t\t\t\t\t\t\t\t0\t\t\t\t\t\t\t\t0\t\t\t\t\t\t\t\t\t\t\tCEat0G8rTN\tRO12\t\ttaul\t1K8T\t2Ix5\tqEdASpP\ty2LIM01bE1\t\t\tlg1t\t9_Y1\tk13i\tsJzTlal\tzm5i\tme75fM6ugJ\tkIsH\t\tuKAI\tL84s\tNhsEn4L\t\t\t\tkZJyVg2\t\t\tFzaX\t0AJo2f2\toslk\t2Kb5FSF\tLM8l689qOp\t\t\tfKCe\tRAYp\tF2FyR07IdsN7I\t\t',
        '00003\t0\t0\t0\t1\t\t\t\t\t\t5236\t7\t\t\t\t\t\t904\t\t\t\t\t\t\t\t1212\t1515\t\t26\t816\t\t\t220.08\t\t\t\t\t\t\t0\t\t\t5883894\t\t\t\t\t\t0\t\t\t\t\t\t\t\t\t\t\t\t\t6.599658\t\t\t\t\t\t\t\t9\t\t\t\t\t\t\t\t130\t518\t\t1675776\t\t0\t\t\t16211.58\t\t40\t\t58\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t312\t\t\t336\t405104\t\t\t\t\t\t3230\t\t\t\t114\t\t5967\t-28\t\t\t\t\t\t0\t3478905\t248932\t\t\t\t\t\t800\t\t\t0\t36\t\t\t\t\t320565\t\t\t\t9826360\t\t\t\t\t\t\t206\t\t\t434946\t\t\t\t\t\t\t\t\t\t0\t\t\t\t\t\t\t\t0\t\t\t\t\t\t\t\t\t\t\teOQt0GoOh3\tAERks4l\tSEuy\ttaul\t1K8T\tffXs\tNldASpP\ty4g9XoZ\tvynJTq9\tsmXZ\t4bTR\t9_Y1\tMGOA\tVpdQ\thaYg\tDHn_WUyBhW_whjA88g9bvA64_\tkIsH\t\tuKAI\tL84s\tUbxQ8lZ\t\tTTGHfSv\t\tpMWAe2U\tbHR7\tUYBR\tFzaX\tJFM1BiF\tAl6ZaUT\tNKv4yOc\tjySVZNlOJy\t\tkG3k\tQu4f\t02N6s8f\tib5G6X1eUxUn6\tam7c\t',
        '00004\t0\t0\t0\t1\t\t\t\t\t\t\t0\t\t\t\t\t\t0\t\t\t\t\t\t\t\t\t0\t\t\t0\t\t\t22.08\t\t\t\t\t\t\t0\t\t\t0\t\t\t\t\t\t0\t\t\t\t\t\t\t\t\t\t\t\t\t1.98825\t\t\t\t\t\t\t\t9\t\t\t\t\t\t\t\t12\t0\t\t0\t\t0\t\t\t\t\t0\t\t0\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t0\t-275703.6\t\t\t\t\t\t\t\t\t\t0\t\t0\t-14\t\t\t\t\t\t0\t0\t0\t\t\t\t\t\t0\t\t\t0\t\t\t\t\t\t\t\t\t\t0\t\t\t\t\t\t\t0\t\t\t0\t\t\t\t\t\t\t\t\t\t0\t\t\t\t\t\t\t\t0\t\t\t\t\t\t\t\t\t\t\tjg69tYsGvO\tRO12\t\ttaul\t1K8T\tssAy\t_ybO0dd\t4hMlgkf58mhwh\t\t\tW8mQ\t9_Y1\tYULl\tVpdQ\t\tme75fM6ugJ\tkIsH\t\tuKAI\tMtgm\tNhsEn4L\t\t\t\tkq0dQfu\teKej\tUYBR\tFzaX\tL91KIiz\toslk\tCE7uk3u\tLM8l689qOp\t\t\tFSa2\tRAYp\tF2FyR07IdsN7I\t\t'
      ]
    },
    {
      // learning dataset (after model generation)
      id: 'learning_dataset_with_model', // must be different to support track_by attribute
      created_at: '2014-12-15T15:09:08.112Z',
      updated_at: '2014-12-15T15:12:48.082Z',
      name: 'Learning dataset (complete)',
      header: true,
      separator: '\t',
      user_id: '541b06dc617070006d060000',
      source_ids: ['54904b136170700007330000'],
      generated_dictionaries_ids: ['parent_dictionary'],
      dictionary_ids: [],
      parent_dataset_id: null,
      sampling: 100,
      nb_of_lines: 50002,
      children_dataset_ids: ['learned_learning_dataset', 'tested_learning_dataset'],
      data_file: {
        id: '54904b09776f720001650000',
        filename: 'learning-dataset.csv',
        type: 'S3',
        size: 538296,
        url: S3_URL + '/download/file/from/s3/learning-dataset.csv'
      },
      main_modality: null,
      classifier_id: null,
      dataset_id: null,
      job_ids: [
        '54904bfe6170700007930000',
        '54904bf961707000078c0000',
        '54904b146170700007360000',
        '54904ce06170700007d10000'
      ],
      preview: [
        'CustID\tDUALPLAY\tFRAGILITE\tTV\tTOY\tVar1\tVar2\tVar3\tVar4\tVar5\tVar6\tVar7\tVar8\tVar9\tVar10\tVar11\tVar12\tVar13\tVar14\tVar15\tVar16\tVar17\tVar18\tVar19\tVar20\tVar21\tVar22\tVar23\tVar24\tVar25\tVar26\tVar27\tVar28\tVar29\tVar30\tVar31\tVar32\tVar33\tVar34\tVar35\tVar36\tVar37\tVar38\tVar39\tVar40\tVar41\tVar42\tVar43\tVar44\tVar45\tVar46\tVar47\tVar48\tVar49\tVar50\tVar51\tVar52\tVar53\tVar54\tVar55\tVar56\tVar57\tVar58\tVar59\tVar60\tVar61\tVar62\tVar63\tVar64\tVar65\tVar66\tVar67\tVar68\tVar69\tVar70\tVar71\tVar72\tVar73\tVar74\tVar75\tVar76\tVar77\tVar78\tVar79\tVar80\tVar81\tVar82\tVar83\tVar84\tVar85\tVar86\tVar87\tVar88\tVar89\tVar90\tVar91\tVar92\tVar93\tVar94\tVar95\tVar96\tVar97\tVar98\tVar99\tVar100\tVar101\tVar102\tVar103\tVar104\tVar105\tVar106\tVar107\tVar108\tVar109\tVar110\tVar111\tVar112\tVar113\tVar114\tVar115\tVar116\tVar117\tVar118\tVar119\tVar120\tVar121\tVar122\tVar123\tVar124\tVar125\tVar126\tVar127\tVar128\tVar129\tVar130\tVar131\tVar132\tVar133\tVar134\tVar135\tVar136\tVar137\tVar138\tVar139\tVar140\tVar141\tVar142\tVar143\tVar144\tVar145\tVar146\tVar147\tVar148\tVar149\tVar150\tVar151\tVar152\tVar153\tVar154\tVar155\tVar156\tVar157\t',
        '00001\t0\t0\t0\t0\t\t\t\t\t\t1526\t7\t\t\t\t\t\t184\t\t\t\t\t\t\t\t464\t580\t\t14\t128\t\t\t166.56\t\t\t\t\t\t\t0\t\t\t3570\t\t\t\t\t\t0\t\t\t\t\t\t\t\t\t\t\t\t\t4.076907\t\t\t\t\t\t\t\t9\t\t\t\t\t\t\t\t36\t35\t\t1350864\t\t0\t\t\t7333.11\t\t5\t\t12\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t104\t\t\t168\t117625.6\t\t\t\t\t\t1175\t\t\t\t6\t\t720\t8\t\t\t\t\t\t0\t1212385\t69134\t\t\t\t\t\t185\t\t\t0\t9\t\t\t\t\t397579\t\t\t\t1812252\t\t\t\t\t\t\t142\t\t\t38418\t\t\t\t\t\t\t\t\t\t0\t\t\t\t\t\t\t\t0\t\t\t\t\t\t\t\t462\t\t\tbZkvyxLkBI\tRO12\t\ttaul\t1K8T\tlK27\tka_ns41\tnQUveAzAF7\t\t\tdXGu\t9_Y1\tFbIm\tVpdQ\thaYg\tme75fM6ugJ\tkIsH\t\tuKAI\tL84s\tXfqtO3UdzaXh_\t\t\t\tXTbPUYD\tsH5Z\tcJvF\tFzaX\t1YVfGrO\toslk\tfXVEsaq\tjySVZNlOJy\t\t\txb3V\tRAYp\tF2FyR07IdsN7I\t\t',
        '00002\t0\t1\t0\t0\t\t\t\t\t\t525\t0\t\t\t\t\t\t0\t\t\t\t\t\t\t\t168\t210\t\t2\t24\t\t\t353.52\t\t\t\t\t\t\t0\t\t\t4764966\t\t\t\t\t\t0\t\t\t\t\t\t\t\t\t\t\t\t\t5.408032\t\t\t\t\t\t\t\t9\t\t\t\t\t\t\t3\t26\t0\t\t2872928\t\t3\t\t\t151098.9\t\t25\t\t2\t\t\t\t\t\t\t\t\t58158\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t40\t\t\t40\t-356411.6\t\t\t\t\t\t590\t\t\t\t72\t\t0\t\t\t\t\t\t\t8\t4136430\t357038\t\t\t\t\t\t0\t\t\t0\t9\t\t\t\t\t278334\t\t\t\t10439160\t\t\t\t\t\t\t32\t\t\t238572\t\t\t\t\t\t\t\t\t\t0\t\t\t\t\t\t\t\t0\t\t\t\t\t\t\t\t\t\t\tCEat0G8rTN\tRO12\t\ttaul\t1K8T\t2Ix5\tqEdASpP\ty2LIM01bE1\t\t\tlg1t\t9_Y1\tk13i\tsJzTlal\tzm5i\tme75fM6ugJ\tkIsH\t\tuKAI\tL84s\tNhsEn4L\t\t\t\tkZJyVg2\t\t\tFzaX\t0AJo2f2\toslk\t2Kb5FSF\tLM8l689qOp\t\t\tfKCe\tRAYp\tF2FyR07IdsN7I\t\t',
        '00003\t0\t0\t0\t1\t\t\t\t\t\t5236\t7\t\t\t\t\t\t904\t\t\t\t\t\t\t\t1212\t1515\t\t26\t816\t\t\t220.08\t\t\t\t\t\t\t0\t\t\t5883894\t\t\t\t\t\t0\t\t\t\t\t\t\t\t\t\t\t\t\t6.599658\t\t\t\t\t\t\t\t9\t\t\t\t\t\t\t\t130\t518\t\t1675776\t\t0\t\t\t16211.58\t\t40\t\t58\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t312\t\t\t336\t405104\t\t\t\t\t\t3230\t\t\t\t114\t\t5967\t-28\t\t\t\t\t\t0\t3478905\t248932\t\t\t\t\t\t800\t\t\t0\t36\t\t\t\t\t320565\t\t\t\t9826360\t\t\t\t\t\t\t206\t\t\t434946\t\t\t\t\t\t\t\t\t\t0\t\t\t\t\t\t\t\t0\t\t\t\t\t\t\t\t\t\t\teOQt0GoOh3\tAERks4l\tSEuy\ttaul\t1K8T\tffXs\tNldASpP\ty4g9XoZ\tvynJTq9\tsmXZ\t4bTR\t9_Y1\tMGOA\tVpdQ\thaYg\tDHn_WUyBhW_whjA88g9bvA64_\tkIsH\t\tuKAI\tL84s\tUbxQ8lZ\t\tTTGHfSv\t\tpMWAe2U\tbHR7\tUYBR\tFzaX\tJFM1BiF\tAl6ZaUT\tNKv4yOc\tjySVZNlOJy\t\tkG3k\tQu4f\t02N6s8f\tib5G6X1eUxUn6\tam7c\t',
        '00004\t0\t0\t0\t1\t\t\t\t\t\t\t0\t\t\t\t\t\t0\t\t\t\t\t\t\t\t\t0\t\t\t0\t\t\t22.08\t\t\t\t\t\t\t0\t\t\t0\t\t\t\t\t\t0\t\t\t\t\t\t\t\t\t\t\t\t\t1.98825\t\t\t\t\t\t\t\t9\t\t\t\t\t\t\t\t12\t0\t\t0\t\t0\t\t\t\t\t0\t\t0\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t0\t-275703.6\t\t\t\t\t\t\t\t\t\t0\t\t0\t-14\t\t\t\t\t\t0\t0\t0\t\t\t\t\t\t0\t\t\t0\t\t\t\t\t\t\t\t\t\t0\t\t\t\t\t\t\t0\t\t\t0\t\t\t\t\t\t\t\t\t\t0\t\t\t\t\t\t\t\t0\t\t\t\t\t\t\t\t\t\t\tjg69tYsGvO\tRO12\t\ttaul\t1K8T\tssAy\t_ybO0dd\t4hMlgkf58mhwh\t\t\tW8mQ\t9_Y1\tYULl\tVpdQ\t\tme75fM6ugJ\tkIsH\t\tuKAI\tMtgm\tNhsEn4L\t\t\t\tkq0dQfu\teKej\tUYBR\tFzaX\tL91KIiz\toslk\tCE7uk3u\tLM8l689qOp\t\t\tFSa2\tRAYp\tF2FyR07IdsN7I\t\t'
      ]
    },
    {
      // splitted learning dataset -> learned part
      id: 'learned_learning_dataset',
      created_at: '2014-12-16T15:09:08.112Z',
      updated_at: '2014-12-16T15:08:57.970Z',
      name: 'learned_Learning dataset',
      header: true,
      separator: '\t',
      user_id: '541b06dc617070006d060000',
      source_ids: [],
      parent_dataset_id: 'learning_dataset_with_model',
      children_dataset_ids: [],
      dictionary_ids: ['parent_dictionary'],
      generated_dictionaries_ids: [],
      sampling: 70,
      nb_of_lines: null,
      data_file: {
        id: '54904b09776f720001650000',
        filename: 'learned_learning-dataset.csv',
        type: 'S3',
        size: 538296,
        url: S3_URL + '/download/file/from/s3/learned_learning-dataset.csv'
      },
      main_modality: null,
      classifier_id: null,
      dataset_id: null,
      job_ids: ['54904b146170700007360000'],
      preview: null
    },
    {
     // splitted learning dataset -> tested part
      id: 'tested_learning_dataset',
      created_at: '2014-12-17T15:09:08.112Z',
      updated_at: '2014-12-17T15:08:57.970Z',
      name: 'tested_Learning dataset',
      header: true,
      separator: '\t',
      user_id: '541b06dc617070006d060000',
      source_ids: [],
      parent_dataset_id: 'learning_dataset_with_model',
      children_dataset_ids: [],
      dictionary_ids: ['parent_dictionary'],
      generated_dictionaries_ids: [],
      sampling: -70,
      nb_of_lines: null,
      data_file: {
        id: '54904b09776f720001650000',
        filename: 'tested_learning-dataset.csv',
        type: 'S3',
        size: 538296,
        url: S3_URL + '/download/file/from/s3/tested_learning-dataset.csv'
      },
      main_modality: null,
      classifier_id: null,
      dataset_id: null,
      job_ids: ['54904b146170700007360000'],
      preview: null
    },
    {
      // only for testing dataset deletion
      id: 'fail',
      created_at: '2014-12-18T15:09:08.112Z',
      updated_at: '2014-12-18T15:12:48.082Z',
      name: 'Learning dataset (test failure on dataset deletion)',
      header: false,
      separator: '\t',
      user_id: '541b06dc617070006d060000',
      source_ids: ['54904b136170700007330000'],
      generated_dictionaries_ids: ['54904d1b6170700007d30000'],
      parent_dataset_id: null,
      sampling: 100,
      nb_of_lines: 50002,
      children_dataset_ids: [],
      dictionary_ids: [],
      data_file: {
        id: '54904b09776f720001650000',
        filename: 'test-failure-on-dataset-deletion.csv',
        type: 'S3',
        size: 538296,
        url: S3_URL + '/download/file/from/s3/test-failure-on-dataset-deletion.csv'
      },
      main_modality: null,
      classifier_id: null,
      dataset_id: null,
      job_ids: [
        '54904bfe6170700007930000',
        '54904bf961707000078c0000',
        '54904b146170700007360000',
        '54904ce06170700007d10000'
      ],
      preview: [
        'CustID\tDUALPLAY\tFRAGILITE\tTV\tTOY\tVar1\tVar2\tVar3\tVar4\tVar5\tVar6\tVar7\tVar8\tVar9\tVar10\tVar11\tVar12\tVar13\tVar14\tVar15\tVar16\tVar17\tVar18\tVar19\tVar20\tVar21\tVar22\tVar23\tVar24\tVar25\tVar26\tVar27\tVar28\tVar29\tVar30\tVar31\tVar32\tVar33\tVar34\tVar35\tVar36\tVar37\tVar38\tVar39\tVar40\tVar41\tVar42\tVar43\tVar44\tVar45\tVar46\tVar47\tVar48\tVar49\tVar50\tVar51\tVar52\tVar53\tVar54\tVar55\tVar56\tVar57\tVar58\tVar59\tVar60\tVar61\tVar62\tVar63\tVar64\tVar65\tVar66\tVar67\tVar68\tVar69\tVar70\tVar71\tVar72\tVar73\tVar74\tVar75\tVar76\tVar77\tVar78\tVar79\tVar80\tVar81\tVar82\tVar83\tVar84\tVar85\tVar86\tVar87\tVar88\tVar89\tVar90\tVar91\tVar92\tVar93\tVar94\tVar95\tVar96\tVar97\tVar98\tVar99\tVar100\tVar101\tVar102\tVar103\tVar104\tVar105\tVar106\tVar107\tVar108\tVar109\tVar110\tVar111\tVar112\tVar113\tVar114\tVar115\tVar116\tVar117\tVar118\tVar119\tVar120\tVar121\tVar122\tVar123\tVar124\tVar125\tVar126\tVar127\tVar128\tVar129\tVar130\tVar131\tVar132\tVar133\tVar134\tVar135\tVar136\tVar137\tVar138\tVar139\tVar140\tVar141\tVar142\tVar143\tVar144\tVar145\tVar146\tVar147\tVar148\tVar149\tVar150\tVar151\tVar152\tVar153\tVar154\tVar155\tVar156\tVar157\t',
        '00001\t0\t0\t0\t0\t\t\t\t\t\t1526\t7\t\t\t\t\t\t184\t\t\t\t\t\t\t\t464\t580\t\t14\t128\t\t\t166.56\t\t\t\t\t\t\t0\t\t\t3570\t\t\t\t\t\t0\t\t\t\t\t\t\t\t\t\t\t\t\t4.076907\t\t\t\t\t\t\t\t9\t\t\t\t\t\t\t\t36\t35\t\t1350864\t\t0\t\t\t7333.11\t\t5\t\t12\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t104\t\t\t168\t117625.6\t\t\t\t\t\t1175\t\t\t\t6\t\t720\t8\t\t\t\t\t\t0\t1212385\t69134\t\t\t\t\t\t185\t\t\t0\t9\t\t\t\t\t397579\t\t\t\t1812252\t\t\t\t\t\t\t142\t\t\t38418\t\t\t\t\t\t\t\t\t\t0\t\t\t\t\t\t\t\t0\t\t\t\t\t\t\t\t462\t\t\tbZkvyxLkBI\tRO12\t\ttaul\t1K8T\tlK27\tka_ns41\tnQUveAzAF7\t\t\tdXGu\t9_Y1\tFbIm\tVpdQ\thaYg\tme75fM6ugJ\tkIsH\t\tuKAI\tL84s\tXfqtO3UdzaXh_\t\t\t\tXTbPUYD\tsH5Z\tcJvF\tFzaX\t1YVfGrO\toslk\tfXVEsaq\tjySVZNlOJy\t\t\txb3V\tRAYp\tF2FyR07IdsN7I\t\t',
        '00002\t0\t1\t0\t0\t\t\t\t\t\t525\t0\t\t\t\t\t\t0\t\t\t\t\t\t\t\t168\t210\t\t2\t24\t\t\t353.52\t\t\t\t\t\t\t0\t\t\t4764966\t\t\t\t\t\t0\t\t\t\t\t\t\t\t\t\t\t\t\t5.408032\t\t\t\t\t\t\t\t9\t\t\t\t\t\t\t3\t26\t0\t\t2872928\t\t3\t\t\t151098.9\t\t25\t\t2\t\t\t\t\t\t\t\t\t58158\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t40\t\t\t40\t-356411.6\t\t\t\t\t\t590\t\t\t\t72\t\t0\t\t\t\t\t\t\t8\t4136430\t357038\t\t\t\t\t\t0\t\t\t0\t9\t\t\t\t\t278334\t\t\t\t10439160\t\t\t\t\t\t\t32\t\t\t238572\t\t\t\t\t\t\t\t\t\t0\t\t\t\t\t\t\t\t0\t\t\t\t\t\t\t\t\t\t\tCEat0G8rTN\tRO12\t\ttaul\t1K8T\t2Ix5\tqEdASpP\ty2LIM01bE1\t\t\tlg1t\t9_Y1\tk13i\tsJzTlal\tzm5i\tme75fM6ugJ\tkIsH\t\tuKAI\tL84s\tNhsEn4L\t\t\t\tkZJyVg2\t\t\tFzaX\t0AJo2f2\toslk\t2Kb5FSF\tLM8l689qOp\t\t\tfKCe\tRAYp\tF2FyR07IdsN7I\t\t',
        '00003\t0\t0\t0\t1\t\t\t\t\t\t5236\t7\t\t\t\t\t\t904\t\t\t\t\t\t\t\t1212\t1515\t\t26\t816\t\t\t220.08\t\t\t\t\t\t\t0\t\t\t5883894\t\t\t\t\t\t0\t\t\t\t\t\t\t\t\t\t\t\t\t6.599658\t\t\t\t\t\t\t\t9\t\t\t\t\t\t\t\t130\t518\t\t1675776\t\t0\t\t\t16211.58\t\t40\t\t58\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t312\t\t\t336\t405104\t\t\t\t\t\t3230\t\t\t\t114\t\t5967\t-28\t\t\t\t\t\t0\t3478905\t248932\t\t\t\t\t\t800\t\t\t0\t36\t\t\t\t\t320565\t\t\t\t9826360\t\t\t\t\t\t\t206\t\t\t434946\t\t\t\t\t\t\t\t\t\t0\t\t\t\t\t\t\t\t0\t\t\t\t\t\t\t\t\t\t\teOQt0GoOh3\tAERks4l\tSEuy\ttaul\t1K8T\tffXs\tNldASpP\ty4g9XoZ\tvynJTq9\tsmXZ\t4bTR\t9_Y1\tMGOA\tVpdQ\thaYg\tDHn_WUyBhW_whjA88g9bvA64_\tkIsH\t\tuKAI\tL84s\tUbxQ8lZ\t\tTTGHfSv\t\tpMWAe2U\tbHR7\tUYBR\tFzaX\tJFM1BiF\tAl6ZaUT\tNKv4yOc\tjySVZNlOJy\t\tkG3k\tQu4f\t02N6s8f\tib5G6X1eUxUn6\tam7c\t',
        '00004\t0\t0\t0\t1\t\t\t\t\t\t\t0\t\t\t\t\t\t0\t\t\t\t\t\t\t\t\t0\t\t\t0\t\t\t22.08\t\t\t\t\t\t\t0\t\t\t0\t\t\t\t\t\t0\t\t\t\t\t\t\t\t\t\t\t\t\t1.98825\t\t\t\t\t\t\t\t9\t\t\t\t\t\t\t\t12\t0\t\t0\t\t0\t\t\t\t\t0\t\t0\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t0\t-275703.6\t\t\t\t\t\t\t\t\t\t0\t\t0\t-14\t\t\t\t\t\t0\t0\t0\t\t\t\t\t\t0\t\t\t0\t\t\t\t\t\t\t\t\t\t0\t\t\t\t\t\t\t0\t\t\t0\t\t\t\t\t\t\t\t\t\t0\t\t\t\t\t\t\t\t0\t\t\t\t\t\t\t\t\t\t\tjg69tYsGvO\tRO12\t\ttaul\t1K8T\tssAy\t_ybO0dd\t4hMlgkf58mhwh\t\t\tW8mQ\t9_Y1\tYULl\tVpdQ\t\tme75fM6ugJ\tkIsH\t\tuKAI\tMtgm\tNhsEn4L\t\t\t\tkq0dQfu\teKej\tUYBR\tFzaX\tL91KIiz\toslk\tCE7uk3u\tLM8l689qOp\t\t\tFSa2\tRAYp\tF2FyR07IdsN7I\t\t'
      ]
    },
    {
      // scoring dataset (just after upload)
      id: 'scoring_dataset',
      created_at: '2014-12-19T15:20:00.656Z',
      updated_at: '2014-12-19T15:19:57.107Z',
      name: 'Scoring dataset (input)',
      header: true,
      separator: '\t',
      user_id: '541b06dc617070006d060000',
      source_ids: ['54904da06170700007df0000'],
      generated_dictionaries_ids: [],
      dictionary_ids: [],
      parent_dataset_id: null,
      sampling: 100,
      nb_of_lines: 50002,
      children_dataset_ids: [],
      data_file: {
        id: '54904d9c776f720001bc0700',
        filename: 'scoring-dataset-input.csv',
        type: 'S3',
        size: 2689193,
        url: S3_URL + '/download/file/from/s3/scoring-dataset-input.csv'
      },
      main_modality: null,
      classifier_id: null,
      dataset_id: null,
      job_ids: ['54904da06170700007e20000'],
      preview: [
        'CustID\tDUALPLAY\tFRAGILITE\tTV\tTOY\tVar1\tVar2\tVar3\tVar4\tVar5\tVar6\tVar7\tVar8\tVar9\tVar10\tVar11\tVar12\tVar13\tVar14\tVar15\tVar16\tVar17\tVar18\tVar19\tVar20\tVar21\tVar22\tVar23\tVar24\tVar25\tVar26\tVar27\tVar28\tVar29\tVar30\tVar31\tVar32\tVar33\tVar34\tVar35\tVar36\tVar37\tVar38\tVar39\tVar40\tVar41\tVar42\tVar43\tVar44\tVar45\tVar46\tVar47\tVar48\tVar49\tVar50\tVar51\tVar52\tVar53\tVar54\tVar55\tVar56\tVar57\tVar58\tVar59\tVar60\tVar61\tVar62\tVar63\tVar64\tVar65\tVar66\tVar67\tVar68\tVar69\tVar70\tVar71\tVar72\tVar73\tVar74\tVar75\tVar76\tVar77\tVar78\tVar79\tVar80\tVar81\tVar82\tVar83\tVar84\tVar85\tVar86\tVar87\tVar88\tVar89\tVar90\tVar91\tVar92\tVar93\tVar94\tVar95\tVar96\tVar97\tVar98\tVar99\tVar100\tVar101\tVar102\tVar103\tVar104\tVar105\tVar106\tVar107\tVar108\tVar109\tVar110\tVar111\tVar112\tVar113\tVar114\tVar115\tVar116\tVar117\tVar118\tVar119\tVar120\tVar121\tVar122\tVar123\tVar124\tVar125\tVar126\tVar127\tVar128\tVar129\tVar130\tVar131\tVar132\tVar133\tVar134\tVar135\tVar136\tVar137\tVar138\tVar139\tVar140\tVar141\tVar142\tVar143\tVar144\tVar145\tVar146\tVar147\tVar148\tVar149\tVar150\tVar151\tVar152\tVar153\tVar154\tVar155\tVar156\tVar157\t',
        '00001\t0\t0\t0\t0\t\t\t\t\t\t1526\t7\t\t\t\t\t\t184\t\t\t\t\t\t\t\t464\t580\t\t14\t128\t\t\t166.56\t\t\t\t\t\t\t0\t\t\t3570\t\t\t\t\t\t0\t\t\t\t\t\t\t\t\t\t\t\t\t4.076907\t\t\t\t\t\t\t\t9\t\t\t\t\t\t\t\t36\t35\t\t1350864\t\t0\t\t\t7333.11\t\t5\t\t12\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t104\t\t\t168\t117625.6\t\t\t\t\t\t1175\t\t\t\t6\t\t720\t8\t\t\t\t\t\t0\t1212385\t69134\t\t\t\t\t\t185\t\t\t0\t9\t\t\t\t\t397579\t\t\t\t1812252\t\t\t\t\t\t\t142\t\t\t38418\t\t\t\t\t\t\t\t\t\t0\t\t\t\t\t\t\t\t0\t\t\t\t\t\t\t\t462\t\t\tbZkvyxLkBI\tRO12\t\ttaul\t1K8T\tlK27\tka_ns41\tnQUveAzAF7\t\t\tdXGu\t9_Y1\tFbIm\tVpdQ\thaYg\tme75fM6ugJ\tkIsH\t\tuKAI\tL84s\tXfqtO3UdzaXh_\t\t\t\tXTbPUYD\tsH5Z\tcJvF\tFzaX\t1YVfGrO\toslk\tfXVEsaq\tjySVZNlOJy\t\t\txb3V\tRAYp\tF2FyR07IdsN7I\t\t',
        '00002\t0\t1\t0\t0\t\t\t\t\t\t525\t0\t\t\t\t\t\t0\t\t\t\t\t\t\t\t168\t210\t\t2\t24\t\t\t353.52\t\t\t\t\t\t\t0\t\t\t4764966\t\t\t\t\t\t0\t\t\t\t\t\t\t\t\t\t\t\t\t5.408032\t\t\t\t\t\t\t\t9\t\t\t\t\t\t\t3\t26\t0\t\t2872928\t\t3\t\t\t151098.9\t\t25\t\t2\t\t\t\t\t\t\t\t\t58158\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t40\t\t\t40\t-356411.6\t\t\t\t\t\t590\t\t\t\t72\t\t0\t\t\t\t\t\t\t8\t4136430\t357038\t\t\t\t\t\t0\t\t\t0\t9\t\t\t\t\t278334\t\t\t\t10439160\t\t\t\t\t\t\t32\t\t\t238572\t\t\t\t\t\t\t\t\t\t0\t\t\t\t\t\t\t\t0\t\t\t\t\t\t\t\t\t\t\tCEat0G8rTN\tRO12\t\ttaul\t1K8T\t2Ix5\tqEdASpP\ty2LIM01bE1\t\t\tlg1t\t9_Y1\tk13i\tsJzTlal\tzm5i\tme75fM6ugJ\tkIsH\t\tuKAI\tL84s\tNhsEn4L\t\t\t\tkZJyVg2\t\t\tFzaX\t0AJo2f2\toslk\t2Kb5FSF\tLM8l689qOp\t\t\tfKCe\tRAYp\tF2FyR07IdsN7I\t\t',
        '00003\t0\t0\t0\t1\t\t\t\t\t\t5236\t7\t\t\t\t\t\t904\t\t\t\t\t\t\t\t1212\t1515\t\t26\t816\t\t\t220.08\t\t\t\t\t\t\t0\t\t\t5883894\t\t\t\t\t\t0\t\t\t\t\t\t\t\t\t\t\t\t\t6.599658\t\t\t\t\t\t\t\t9\t\t\t\t\t\t\t\t130\t518\t\t1675776\t\t0\t\t\t16211.58\t\t40\t\t58\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t312\t\t\t336\t405104\t\t\t\t\t\t3230\t\t\t\t114\t\t5967\t-28\t\t\t\t\t\t0\t3478905\t248932\t\t\t\t\t\t800\t\t\t0\t36\t\t\t\t\t320565\t\t\t\t9826360\t\t\t\t\t\t\t206\t\t\t434946\t\t\t\t\t\t\t\t\t\t0\t\t\t\t\t\t\t\t0\t\t\t\t\t\t\t\t\t\t\teOQt0GoOh3\tAERks4l\tSEuy\ttaul\t1K8T\tffXs\tNldASpP\ty4g9XoZ\tvynJTq9\tsmXZ\t4bTR\t9_Y1\tMGOA\tVpdQ\thaYg\tDHn_WUyBhW_whjA88g9bvA64_\tkIsH\t\tuKAI\tL84s\tUbxQ8lZ\t\tTTGHfSv\t\tpMWAe2U\tbHR7\tUYBR\tFzaX\tJFM1BiF\tAl6ZaUT\tNKv4yOc\tjySVZNlOJy\t\tkG3k\tQu4f\t02N6s8f\tib5G6X1eUxUn6\tam7c\t',
        '00004\t0\t0\t0\t1\t\t\t\t\t\t\t0\t\t\t\t\t\t0\t\t\t\t\t\t\t\t\t0\t\t\t0\t\t\t22.08\t\t\t\t\t\t\t0\t\t\t0\t\t\t\t\t\t0\t\t\t\t\t\t\t\t\t\t\t\t\t1.98825\t\t\t\t\t\t\t\t9\t\t\t\t\t\t\t\t12\t0\t\t0\t\t0\t\t\t\t\t0\t\t0\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t0\t-275703.6\t\t\t\t\t\t\t\t\t\t0\t\t0\t-14\t\t\t\t\t\t0\t0\t0\t\t\t\t\t\t0\t\t\t0\t\t\t\t\t\t\t\t\t\t0\t\t\t\t\t\t\t0\t\t\t0\t\t\t\t\t\t\t\t\t\t0\t\t\t\t\t\t\t\t0\t\t\t\t\t\t\t\t\t\t\tjg69tYsGvO\tRO12\t\ttaul\t1K8T\tssAy\t_ybO0dd\t4hMlgkf58mhwh\t\t\tW8mQ\t9_Y1\tYULl\tVpdQ\t\tme75fM6ugJ\tkIsH\t\tuKAI\tMtgm\tNhsEn4L\t\t\t\tkq0dQfu\teKej\tUYBR\tFzaX\tL91KIiz\toslk\tCE7uk3u\tLM8l689qOp\t\t\tFSa2\tRAYp\tF2FyR07IdsN7I\t\t'
      ]
    },
    {
      // scoreset
      id: 'scoreset',
      created_at: '2014-12-20T15:33:23.043Z',
      updated_at: '2014-12-20T15:33:23.043Z',
      name: 'Scoreset (output)',
      header: true,
      separator: '\t',
      user_id: '5363b25c687964476d000000',
      source_ids: [],
      generated_dictionaries_ids: [],
      dictionary_ids: [],
      parent_dataset_id: null,
      sampling: 100,
      nb_of_lines: 50002,
      children_dataset_ids: [],
      data_file: {
        id: '53bcf4a970632d46122d0000',
        filename: 'scoreset-output.csv',
        type: 'S3',
        size: 3089,
        url: S3_URL + '/download/file/from/s3/scoreset-output.csv'
      },
      classifier_id: '5436431070632d15f4260000',
      dataset_id: 'scoring_dataset',
      modalities_set_id: '53fdfa7070632d0fc5030000',
      job_ids: [
        '53c8c88970632d3b9a030006'
      ],
      preview: [
        'CustID\tProbFRAGILITE1',
        '1\t0.05430377',
        '2\t0.315894',
        '3\t0.05430377',
        '4\t0.05430377'
      ]
    }
  ]
};
var _dataset = {dataset: datasetList.datasets[0]};

router.get('/', function(req, res) {
  res.status(200).json(datasetList);
});

router.get('/:id', function(req, res) {
  var answer = JSON.parse(JSON.stringify(_dataset));
  if(req.params.id === 'jobFail') {
    answer.dataset.id = 'jobFail';
  } else if (req.params.id === '42') {
    answer = JSON.parse(JSON.stringify({dataset:datasetList.datasets[5]}));
  } else if (req.params.id === 'learning_dataset_with_model') {
    answer = {dataset: datasetList.datasets[1]};
  } else if (req.params.id === 'learned_learning_dataset') {
    answer = {dataset: datasetList.datasets[2]};
  } else if (req.params.id === 'tested_learning_dataset') {
    answer = {dataset: datasetList.datasets[3]};
  } else if(req.params.id === 'fail') {
    answer = {dataset: datasetList.datasets[4]};
  } else if(req.params.id === 'scoring_dataset') {
    answer = {dataset: datasetList.datasets[5]};
  } else if(req.params.id === 'scoreset') {
    answer = {dataset: datasetList.datasets[6]};
  }

  res.status(200).json(answer);
});

router.post('/', function(req, res) {
  var dataset = JSON.parse(JSON.stringify(_dataset));
  if(req.body.dataset.dataset_id) {
    //apply a model
    if(req.body.dataset.dataset_id === 'fail') {
      res.status(500).send();
    } else {
      dataset.dataset.classifier_id = '5436431070632d15f4260000';
      dataset.dataset.dataset_id = '53a492e870632d6ec1000000';
      setTimeout(function() { res.status(201).json(dataset); }, 2000);
    }
  } else {
    dataset.dataset.id = 'uploadedDataset';
    dataset.dataset.name = req.body.dataset.name;
    dataset.dataset.created_at = new Date().toISOString();
    delete dataset.dataset.data_file;

    //create a dataset
    res.status(201).json(dataset);
  }
});

router.patch('/:id', function(req, res) {
  var dataset = JSON.parse(JSON.stringify(_dataset));
  if(req.body.dataset.separator === ',') {
    res.status(422).json({error: {
      message: 'Wrong separator or the dataset does not have at least 2 columns.',
      status: 422
    }});
  } else {
    dataset.dataset.header = false;
    dataset.dataset.separator = '\t';
    dataset.dataset.dictionary_id = ['54904d1b6170700007d30000'];

    res.status(200).json(dataset);
  }
});

router.delete('/:id', function(req, res) {
  if(req.params.id === 'fail') {
    res.status(500).end();
  } else {
    res.status(204).end();
  }
});

module.exports = router;
