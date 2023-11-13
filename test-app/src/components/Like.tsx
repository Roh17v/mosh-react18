import { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

interface Props {
  onClick: () => void;
}

function Like({ onClick }: Props) {
  const [liked, setLiked] = useState(false);
  const toggle = () => {
    setLiked(!liked);
    onClick();
  };
  if (liked) return <AiFillHeart size={20} color="red" onClick={toggle} />;
  return <AiOutlineHeart size={20} onClick={toggle} />;
}

export default Like;
