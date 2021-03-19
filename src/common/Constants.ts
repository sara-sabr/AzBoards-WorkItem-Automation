/**
 * Constants.
 */
export class Constants {

    /**
     * Default folder for shared queries.
     */
    static readonly DEFAULT_QUERIES_SHARED_FOLDER = "Shared Queries";

    /**
     * The sepeartor for folders in Azure DevOps.
     */
    static readonly DEFAULT_QUERIES_SEPERATOR = "/";

    /**
     * The default folder in Queries for the extension under the "Shared Queries".
     */
    static readonly DEFAULT_QUERIES_EXTENSION_FOLDER = "Automation";

    /**
     * State for in progress when once transitioned, it is considered that work
     * has begun.
     */
    static readonly WIT_STATE_IN_PROGRESS = "In Progress";

    /**
     * State for closed when once transitioned, it is considered to be completed on
     * that date.
     */
    static readonly WIT_STATE_DONE = "Done";

    /**
     * Label for PBIs.
     */
    static readonly WIT_PBI = "Product Backlog Item";

    /**
     * The system name for the ID field.
     */
    static readonly WIT_FIELD_ID = "System.Id";

    /**
     * The system name for the iteration identifier field.
     */
    static readonly WIT_FIELD_ITERATION_ID = "System.IterationId";

    /**
     * The system name for the state field.
     */
    static readonly WIT_FIELD_STATE = "System.State";

    /**
     * The system name for the Parent ID field.
     */
    static readonly WIT_FIELD_PARENT_ID = "System.Parent";

    /**
     * The system name for risk field.
     */
    static readonly WIT_FIELD_RISK = "Microsoft.VSTS.Common.Risk";

    /**
     * The system name for priority field.
     */
    static readonly WIT_FIELD_PRIORITY = "Microsoft.VSTS.Common.Risk";

    /**
     * The system name for action field.
     */
    static readonly WIT_FIELD_ACTION = "Custom.Action";

    /**
     * The system name for description field.
     */
    static readonly WIT_FIELD_DESCRIPTION = "System.Description";

    /**
     * The system name for title field.
     */
    static readonly WIT_FIELD_TITLE = "System.Title";

    /**
     * The system name for the state changed date field.
     */
    static readonly WIT_FIELD_STATE_CHANGED = "Microsoft.VSTS.Common.StateChangeDate";

    /**
     * The system name for the WIT changed date field.
     */
    static readonly WIT_FIELD_CHANGED = "System.ChangedDate";

    /**
     * The system name for the start date.
     */
    static readonly WIT_FIELD_START_DATE = "Microsoft.VSTS.Scheduling.StartDate";

    /**
     * The system name for the finish date.
     */
    static readonly WIT_FIELD_FINISH_DATE = "Microsoft.VSTS.Scheduling.FinishDate";

    /**
     * The relation is a child reference, therfore the source is the parent
     * and the target is the child.
     */
    static readonly WIT_REL_CHILD = "System.LinkTypes.Hierarchy-Forward";
}