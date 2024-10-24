<script>
  let url = "https://example.com"; // Change to the desired URL
</script>

<style>
  .container {
    max-width: 800px;
    margin: 0 auto;
    padding: 2rem;
    text-align: center;
    background: linear-gradient(135deg, #ff9a9e 0%, #fad0c4 100%);
    border-radius: 15px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
    font-family: 'Poppins', sans-serif;
  }

  h1 {
    font-size: 3rem;
    color: #4f4f4f;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.2rem;
    color: #2e2e2e;
    line-height: 1.6;
    margin-bottom: 2rem;
  }

  .read-more {
    display: inline-block;
    padding: 0.75rem 2rem;
    background: #f06292;
    color: white;
    font-size: 1.1rem;
    border: none;
    border-radius: 8px;
    transition: all 0.3s ease;
    text-decoration: none;
  }

  .read-more:hover {
    background: #e91e63;
    box-shadow: 0 8px 20px rgba(233, 30, 99, 0.3);
  }
</style>

<div class="container">
  <h1>GenZ</h1>
  <p>GenZ is the generation of dreamers, doers, and digital natives. Raised in the age of technology, they’re redefining norms, breaking barriers, and embracing new ideas. This generation values authenticity, creativity, and social impact like never before.</p>
  <a class="read-more" href={url} target="_blank">Read More</a>
</div>
