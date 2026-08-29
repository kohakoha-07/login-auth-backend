'use client'

import { useState } from 'react'
import { supabase } from '@/lib/supabase'

export default function Home() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')
  const handleSignUp = async () => {
const { data, error } = await supabase.auth.signUp({
  email: email,
  password: password,
  options: {
    data: {
      username: username,
    },
  },
})
if (error) {
  alert(error.message)
} else {
  alert('新規登録できました！')
}
}

const handleLogin = async () => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  })

  if (error) {
  alert('ログイン失敗：' + error.message)
} else {
  alert('ログイン成功！')
}
}

return (
  <main>
    <input
  type="text"
  placeholder="ユーザー名"
  value={username}
  onChange={(e) => setUsername(e.target.value)}
/>
    <input
      type="email"
      placeholder="メールアドレス"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
    />

    <input
      type="password"
      placeholder="パスワード"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
    />

    <button onClick={handleSignUp}>
      新規登録
    </button>

    <button onClick={handleLogin}>
  ログイン
</button>
  </main>
)
}