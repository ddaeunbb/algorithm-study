/* 이진트리 순회(깊이우선탐색)
아래 그림과 같은 이진트리를 전위순회와 후위순회를 연습해보세요.
	  1
   2	3
 4  5  6  7
전위순회 출력 : 1 2 4 5 3 6 7
중위순회 출력 : 4 2 5 1 6 3 7
후위순회 출력 : 4 5 2 6 7 3 1 */

// 전위 순회
const preorder = (n) => {
  let answer = "";

  const dfs = (vertex) => {
    if (vertex > 7) return;
    else {
      answer += vertex + " ";
      dfs(vertex * 2);
      dfs(vertex * 2 + 1);
    }
  };

  dfs(n);
  return answer;
};
console.log(preorder(1));

// 중위 순회
const inorder = (n) => {
  let answer = "";

  const dfs = (v) => {
    if (v > 7) return;
    else {
      dfs(v * 2);
      answer += v + " ";
      dfs(v * 2 + 1);
    }
  };

  dfs(n);
  return answer;
};
console.log(inorder(1));

// 후위 순회
const postorder = (n) => {
  let answer = "";

  const dfs = (v) => {
    if (v > 7) return;
    else {
      dfs(v * 2);
      dfs(v * 2 + 1);
      answer += v + " ";
    }
  };

  dfs(n);
  return answer;
};
console.log(postorder(1));
