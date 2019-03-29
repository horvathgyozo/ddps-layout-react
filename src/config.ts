// tslint:disable

const DEFAULT_STAGENODESUMMARY_RADIUS = 50

export default {
  /**
   * The minimal vertical gap between two stages (in px).
   */
  VERTICAL_GAP: 15,

  /**
   * The minimal vertical gap between two stages (in px).
   */
  HORIZONTAL_GAP: 1000,

  /**
   * Describes whether to use default node size or not.
   */
  USE_DEFAULT_SIZE: false,

  /**
   * The default radius of a stage summary node (in px).
   */
  DEFAULT_STAGENODESUMMARY_RADIUS,

  /**
   * The default height of a node (in px).
   */
  DEFAULT_NODE_HEIGHT: 2 * DEFAULT_STAGENODESUMMARY_RADIUS,

  /**
   * The default width of a node (in px).
   */
  DEFAULT_NODE_WIDTH: 2 * DEFAULT_STAGENODESUMMARY_RADIUS,

  RDD_BOX_WIDTH: 100,
  RDD_BOX_HEIGHT: DEFAULT_STAGENODESUMMARY_RADIUS * 0.8,
  EXTENDED_SUMMARY_ARROW_LENGTH: 15,

  /**
   * The default width of an expanded node (in px).
   */
  EXPANDED_NODE_WIDTH: 230,

  /**
   * The style of the connections between nodes.
   * Possible values are: "curve", "line"
   */
  CONNECTION_STYLE: 'curve',

  MIN_CONNECTION_WIDTH: 5,
  MAX_CONNECTION_WIDTH: 20,

  MIN_STAGE_DETAIL_ARC_WIDTH: 1,
  MAX_STAGE_DETAIL_ARC_WIDTH: 6,

  fetchInterval: 250,
  badTasksCount: 2,
  histogramIntervals: 30,
  destination: 'localhost:3000',
  slowTaskThreshold: 1.1
} as any
