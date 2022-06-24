const getEpisodeLabelNode = (episodeDetail) => {
    const labelNode = document.createElement('label');
    labelNode.setAttribute('for', episodeDetail);
    return labelNode;
};

const getEpisodeSpanNode = (episodeId, episodeNme) => {
    const spanNode = document.createElement('span');
    spanNode.textContent = `${episodeId} || ${episodeNme}`;
    return spanNode;
};

const isAllChecked = (selectedNode, currentSelectedNode) => {
    const episodeList = document.querySelectorAll('input');
    let startIndex = Array.prototype.indexOf.call(episodeList, selectedNode);
    let endIndex = Array.prototype.indexOf.call(
        episodeList,
        currentSelectedNode,
    );
    if (startIndex > endIndex) {
        [startIndex, endIndex] = [endIndex, startIndex];
    }
    while (startIndex < endIndex) {
        episodeList[startIndex].checked = true;
        startIndex++;
    }
};

let selectedNode;
const prevSelectedEpisode = (event) => {
    const shiftKeyPressed = event.shiftKey;
    if (shiftKeyPressed && selectedNode) {
        const currentSelectedNode = event.target;
        isAllChecked(selectedNode, currentSelectedNode);
    }
    selectedNode = event.target;
    if (!selectedNode.checked) {
        selectedNode = undefined;
    }
};
const getEpisodeInputNode = (episodeDetail) => {
    const inputNode = document.createElement('input');
    inputNode.setAttribute('type', 'checkbox');
    inputNode.setAttribute('name', episodeDetail);
    inputNode.setAttribute('id', episodeDetail);
    return inputNode;
};
const addEventListnertoList = () => {
    const episodeListInput = document.querySelectorAll('input');
    for (let index = 0; index < episodeListInput.length; index++) {
        episodeListInput[index].addEventListener('click', prevSelectedEpisode);
    }
};
export const getEpisodeListNode = (episodeNme, episodeId) => {
    const episodeList = document.createElement('li');
    const episodeDetail = 'episode-' + episodeId;
    const episodeLabelNode = getEpisodeLabelNode(episodeDetail);
    const episodeInputNode = getEpisodeInputNode(episodeDetail);
    const episodeSpanNode = getEpisodeSpanNode(episodeId, episodeNme);
    episodeLabelNode.appendChild(episodeInputNode);
    episodeLabelNode.appendChild(episodeSpanNode);
    episodeList.appendChild(episodeLabelNode);
    addEventListnertoList();
    return episodeList;
};
