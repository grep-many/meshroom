export const COLORS = ["#DC2626", "#D97706", "#059669", "#7C3AED", "#DB2777"];

export const shapeElements = [
  {
    icon: "/meshroom/assets/rectangle.svg",
    name: "Rectangle",
    value: "rectangle",
  },
  {
    icon: "/meshroom/assets/circle.svg",
    name: "Circle",
    value: "circle",
  },
  {
    icon: "/meshroom/assets/triangle.svg",
    name: "Triangle",
    value: "triangle",
  },
  {
    icon: "/meshroom/assets/line.svg",
    name: "Line",
    value: "line",
  },
  {
    icon: "/meshroom/assets/image.svg",
    name: "Image",
    value: "image",
  },
  {
    icon: "/meshroom/assets/freeform.svg",
    name: "Free Drawing",
    value: "freeform",
  },
];

export const navElements = [
  {
    icon: "/meshroom/assets/select.svg",
    name: "Select",
    value: "select",
  },
  {
    icon: "/meshroom/assets/rectangle.svg",
    name: "Rectangle",
    value: shapeElements,
  },
  {
    icon: "/meshroom/assets/text.svg",
    value: "text",
    name: "Text",
  },
  {
    icon: "/meshroom/assets/delete.svg",
    value: "delete",
    name: "Delete",
  },
  {
    icon: "/meshroom/assets/reset.svg",
    value: "reset",
    name: "Reset",
  },
  {
    icon: "/meshroom/assets/comments.svg",
    value: "comments",
    name: "Comments",
  },
];

export const defaultNavElement = {
  icon: "/meshroom/assets/select.svg",
  name: "Select",
  value: "select",
};

export const directionOptions = [
  { label: "Bring to Front", value: "front", icon: "/meshroom/assets/front.svg" },
  { label: "Send to Back", value: "back", icon: "/meshroom/assets/back.svg" },
];

export const fontFamilyOptions = [
  { value: "Helvetica", label: "Helvetica" },
  { value: "Times New Roman", label: "Times New Roman" },
  { value: "Comic Sans MS", label: "Comic Sans MS" },
  { value: "Brush Script MT", label: "Brush Script MT" },
];

export const fontSizeOptions = [
  {
    value: "10",
    label: "10",
  },
  {
    value: "12",
    label: "12",
  },
  {
    value: "14",
    label: "14",
  },
  {
    value: "16",
    label: "16",
  },
  {
    value: "18",
    label: "18",
  },
  {
    value: "20",
    label: "20",
  },
  {
    value: "22",
    label: "22",
  },
  {
    value: "24",
    label: "24",
  },
  {
    value: "26",
    label: "26",
  },
  {
    value: "28",
    label: "28",
  },
  {
    value: "30",
    label: "30",
  },
  {
    value: "32",
    label: "32",
  },
  {
    value: "34",
    label: "34",
  },
  {
    value: "36",
    label: "36",
  },
];

export const fontWeightOptions = [
  {
    value: "400",
    label: "Normal",
  },
  {
    value: "500",
    label: "Semibold",
  },
  {
    value: "600",
    label: "Bold",
  },
];

export const alignmentOptions = [
  { value: "left", label: "Align Left", icon: "/meshroom/assets/align-left.svg" },
  {
    value: "horizontalCenter",
    label: "Align Horizontal Center",
    icon: "/meshroom/assets/align-horizontal-center.svg",
  },
  { value: "right", label: "Align Right", icon: "/meshroom/assets/align-right.svg" },
  { value: "top", label: "Align Top", icon: "/meshroom/assets/align-top.svg" },
  {
    value: "verticalCenter",
    label: "Align Vertical Center",
    icon: "/meshroom/assets/align-vertical-center.svg",
  },
  { value: "bottom", label: "Align Bottom", icon: "/meshroom/assets/align-bottom.svg" },
];

export const shortcuts = [
  {
    key: "1",
    name: "Chat",
    shortcut: "/",
  },
  {
    key: "2",
    name: "Undo",
    shortcut: "⌘ + Z",
  },
  {
    key: "3",
    name: "Redo",
    shortcut: "⌘ + Y",
  },
  {
    key: "4",
    name: "Reactions",
    shortcut: "E",
  },
];
