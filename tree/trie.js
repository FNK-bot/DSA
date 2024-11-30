class TrieNode {
    constructor() {
        this.children = {};
        this.isEndOfWord = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    // Insert a word
    insert(word) {
        let current = this.root;
        for (const char of word) {
            if (!current.children[char]) {
                current.children[char] = new TrieNode();
            }
            current = current.children[char];
        }
        current.isEndOfWord = true;
    }

    // Search for a word
    search(word) {
        let current = this.root;
        for (const char of word) {
            if (!current.children[char]) return false;
            current = current.children[char];
        }
        return current.isEndOfWord;
    }

    // Autocomplete suggestions based on prefix
    autocomplete(prefix) {
        const suggestions = [];
        let current = this.root;
        for (const char of prefix) {
            if (!current.children[char]) return suggestions;
            current = current.children[char];
        }

        const dfs = (node, prefix) => {
            if (node.isEndOfWord) suggestions.push(prefix);
            for (const char in node.children) {
                dfs(node.children[char], prefix + char);
            }
        };
        dfs(current, prefix);
        return suggestions;
    }
}


const trie = new Trie();
trie.insert("cat");
trie.insert("car");
trie.insert("cart");
trie.insert("dog");

console.log("Search 'cat':", trie.search("cat"));
console.log("Autocomplete for 'ca':", trie.autocomplete("ca"));
