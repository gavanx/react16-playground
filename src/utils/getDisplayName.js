/**
 * Created by gavan(guoming3@xiaomi.com) on 2019-11-12.
 */
export default function getDisplayName(Component) {
  return (
    Component.displayName ||
    Component.name ||
    (typeof Component === 'string' && Component.length > 0
      ? Component
      : 'Unknown')
  );
}
