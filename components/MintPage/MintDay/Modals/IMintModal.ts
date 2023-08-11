export default interface IMintModal {
  handleLoading: (isMintLoading: boolean) => void
  isModalVisible: boolean
  toggleIsVisible: () => void
  loading: boolean
  coreMintFunc: () => Promise<any>
  openSuccessModal: () => void
}
