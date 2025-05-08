export type Player = {
  /**
   * The player's name.
   */
  name: string;
  /**
   * The player's image URL.
   */
  image: string;
  /**
   * The player's data identifier.
   */
  dataPlayer: string;
  /**
   * The className of player card to add styling
   */
  className?: string;
};

export type Message = {
  /**
   * The message content.
   */
  content: string;
  /**
   * The message type (e.g., "info", "success", "error").
   */
  type: "info" | "success" | "error" | "warning";
  /**
   * The duration in milliseconds for which the message should be displayed.
   */
  duration?: number;
  /**
   * Whether to show a loader icon.
   */
  showLoader?: boolean;
}

export type Results = {
  /**
   * The image of the identified player or celebrity.
   */
  image: string;

  /**
   * The message to be displayed when the results load successfully.
   */
  message: string;

  /**
   * The probabilities of all identified classes, including the identified player or celebrity.
   */
  probabilities: {
    class: string;
    probability: number;
  }[];

  /**
   * A callback function to handle the back button action.
   * This is optional and can be used to navigate back to the previous screen or perform any other action.
   */
  onBack?: () => void;
};