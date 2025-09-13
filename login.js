

// Supabase Initialization
const supabaseUrl = 'https//zsyjqwlefzaikxnpetgwk.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpzeWpxd2xmemFpa3hucGV0Z3drIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTY4MjcxMzEsImV4cCI6MjA3MjQwMzEzMX0.SOTRyokYnaUB2ACJeLuZwPXqUgEPyXa-v2AToltiNhw';
const supabase = window.supabase.createClient(supabaseUrl, supabaseKey);
console.log(supabase);

const login=document.querySelector("#login");
login.addEventListener("click",async()=>{
    const email=document.querySelector("#email").value ;
    console.log(email);

    const password=document.querySelector("#password").value ;
    console.log(password);

    
    if (!email || !password) {
        alert("All fields are required!");
        return;
    }

    // Supabase Login with Password

const { data, error } = await supabase.auth.signInWithPassword({
  email,
  password,
})

if (error) {
    alert(error.message)
} else {
    alert("Login Successful!");
    window.location.href="notes.html"
}

})

// Sign up button
const signup=document.querySelector("#signup");
signup.addEventListener("click",() => {
    window.location.href="index.html"
})
