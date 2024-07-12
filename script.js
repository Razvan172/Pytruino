document.getElementById('copyButton').addEventListener('click', function() {
    // Text you want to copy to clipboard
    const textToCopy = "This is the text you want to copy.";

    // Create a textarea element to hold the text temporarily
    const textarea = document.createElement('textarea');
    textarea.value = textToCopy;
    document.body.appendChild(textarea);

    // Select the text in the textarea
    textarea.select();
    textarea.setSelectionRange(0, 99999); /* For mobile devices */

    // Copy the selected text
    document.execCommand('copy');

    // Remove the textarea from the DOM
    document.body.removeChild(textarea);

    // Update button text to show it's copied (optional)
    this.textContent = 'Copied!';
});
