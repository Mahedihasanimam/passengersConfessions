export const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};
interface IIsSubscriber {
  user: any;
  type?: "premium" | "basic";
}
export const isSubscriber = ({ user, type }: IIsSubscriber) => {
  if (type) {
    if (type === "premium") {
      return !!user?.isPremiumSubscribed;
    } else if (type === "basic") {
      return !!user?.isBasicSubscribed;
    }
  } else {
    if (user?._id) {
      return user?.isBasicSubscribed || user?.isPremiumSubscribed;
    } else {
      return false;
    }
  }
};
